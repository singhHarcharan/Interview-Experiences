const express = require('express');
const { createClient } = require('redis');
const { rateLimit } = require('express-rate-limit');
const { useEffect } = require('react');

const app = express();

// Redis client setup
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Connect to Redis
redisClient.on('error', (err) => console.log('Redis Client Error', err));
useEffect(() => {
    async function connect() {
        await redisClient.connect();
    }
    connect();
    console.log('Redis connected');
}, []);

app.use(express.json());

// Rate limiting middleware (5 requests per minute per user)
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // 5 requests per window
    keyGenerator: (req) => req.headers['user-id'] || 'anonymous', // Use user ID from header
    handler: (req, res) => {
        res.status(429).json({
            error: 'Too many requests, please try again later.',
            callsRemaining: 0
        });
    }
});

// Process endpoint with rate limiting
app.post('/process', limiter, async (req, res) => {
    try {
        const { text, 'user-id': userId } = req.body;
        
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        const cacheKey = `cache:${userId || 'anonymous'}:${text}`;
        
        // Check cache first
        const cachedResult = await redisClient.get(cacheKey);
        
        if (cachedResult) {
            const result = JSON.parse(cachedResult);
            return res.json({
                ...result,
                cacheHit: true,
                callsRemaining: req.rateLimit.remaining
            });
        }

        // Simulate processing time (1 second)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Process the text (reverse it)
        const reversedText = text.split('').reverse().join('');
        const result = { reversedText };
        
        // Cache the result for 5 minutes
        await redisClient.setEx(cacheKey, 300, JSON.stringify(result));
        
        // Get remaining rate limit
        const remaining = req.rateLimit.remaining;
        
        res.json({
            ...result,
            cacheHit: false,
            callsRemaining: remaining - 1
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});