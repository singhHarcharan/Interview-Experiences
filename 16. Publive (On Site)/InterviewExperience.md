## Round 1: Technical Interview with Co-Founder (60 minutes) (March 12, 2026)

- Started with an informal intro, like what I do, hobbies, etc., because the co-founder wanted me to be comfortable.
- Then he started asking about my past experience.
- The product I have worked on.
- A few follow-ups on that product (TechMate AI).
- Then he tried to test my designing skills, so he asked me a few questions regarding scalability, which I messed up.
- Then he tried to check my flow, i.e., how I use AI for development.
	I explained my approach, but he wanted me to show that, so he gave me one problem statement to build using AI (i.e., Splitwise application).
- At this point, I realized I made a mistake in using AI, i.e., jumping onto implementation directly rather than going for planning and all.

But luckily, at last, he told me that he is scheduling one more interview for DSA with the Engineering Manager.

## Round 2: Technical Interview with Engineering Manager (60 minutes) (March 17, 2026)

- Started with intro.
- Then he gave me one problem related to DSA.

Following is the DSA question, my code, approach, and system design question.  
I solved and implemented the DSA question within 18-20 minutes.

Problem 1: https://leetcode.com/problems/subarray-sum-equals-k/description/

```cpp
/*
	 2, 3, 1, 1, 1, 7      k = 3

	 Unordered_map

	 sum: 2 = 1      remainigSum = sum - k = - 1
	 sum: 5 = 1      remainigSum = sum - k = 2
	 sum: 6 = 1      remainigSum = sum - k = 3       cnt = 1
	 sum: 7 = 1      remainigSum = sum - k = 6       cnt = 2
	 sum: 8 = 1      remainingSum = sum - k = 7


	 [1,2,3] k = 3

	 sum: 1      rS = - 2    cnt = 0
	 sum: 3      rS = 0      cnt = 0
	 sum: 6      rS = 3      cnt = 1

	 if(currSum == reqSum) cnt++


	 // base case
	 if(sizeOfArra == 1 && arr[0] != k) return 0;
*/

class Solution {
public:
	 int subarraySum(vector<int>& nums, int k) {
			 unordered_map<int, int> mp;
			 int currSum = 0;
			 int reqSum = k, cnt = 0;

			 for(auto it: nums) {
					 currSum += it;

					 // Ideal Condition.
					 if(currSum == reqSum) {
							 cnt++;
					 }

					 int remainingSum = currSum -  reqSum;
					 if(mp.count(remainingSum)) {
							 cnt += mp[remainingSum];
					 }

					 // Store currentSum's value in map
					 mp[currSum]++;
			 }
			 return cnt;
	 }
};
```

System design:

We run a B2B CMS platform for news media publishers. Every publisher has different content needs - one wants Articles with custom SEO fields, another wants Live Blogs with ticker entries, another wants Video content with ad-break markers.
Design a system that lets publishers define their own content types (entities) with custom fields, and lets their editors create, edit, publish, and query content of those types - at scale across 1000+ publishers.

Constraints:

- 1000+ publisher tenants, each with 5-20 custom entity types
- Each entity type can have 10-50 custom fields (text, number, date, rich text, media, relation)
- Content is read-heavy - articles get served to millions of readers via CDN
- Publishers manage this via a CMS UI

Solution:

- Article
	- Medical
	- Food & consumption
- Live Blogs
- Video Content
- Create (Blog / Video / Article)

Database: Postgres

Orgs: {
	Features: [{
		Article: {
			- Create: {
				- user
				- Org
				- Feature
			}
			- Read
			- Update
			- Delete
		}
	}, {
		Video Content: {
			- Create
			- Read
			- Update
			- Delete
		}
	}]
}

I was not able to explain the system design solution to him.

- Then he moved to behavioral questions, like how I would fix it if there is some conflict between me and my junior/senior in the team over a solution.
- Then a few OS questions, like:
	- Memory allocations
	- Let us say we have 2 processes running on an EC2 machine handling 2 requests/sec. What approach would we use to make it capable of handling 10 requests/sec? I gave him the approach of converting process into threads and using each thread for that (although noob/wrong answer).
	- Thread vs process
	- Do we have shared memory or CPU in threads

- At last, he told me that the result for this interview will be out in mostly 2 days.

And after 2 hours, I got a call from HR, and she asked me to share 3 months salary slips for previous company.





