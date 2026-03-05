## Round 1: Technical Interview (60 minutes) — March 3, 2026

### Interview Flow

- **Introduction**
  - The interviewer started with introductions and asked me to introduce myself.

- **Questions based on my introduction**
  - I mentioned that I’ve worked across **three different domains** in the last **1.5 years**.
  - He asked:
    - Where do I see myself in the next **5 years**?
    - Whether I think I moved into **GenAI** too quickly without spending enough time understanding **legacy projects**, which can be crucial for building domain understanding.

- **Java questions**
  - What is multithreading?
  - Print even and odd numbers using two threads.
  - What are the features of Java 8?
  - A few more questions were asked, but I don’t remember them now.

---

### DSA Question (30–35 minutes)

The interviewer asked me to solve the following problem and mainly wanted a **clear approach/pseudocode**.

#### Problem Statement

Given a current time in `"HH:MM"` format (24-hour clock), calculate how many minutes must pass until the clock reaches the next time where:

- The **first digit equals the last digit**, and
- The **second digit equals the third digit**

In other words, the next time should look like `AB:BA`.

#### Examples

- Current time: `"12:34"` → Next special time: `"13:31"` → Answer: `57`
- Current time: `"23:50"` → Next special time: `"00:00"` → Answer: `10`
- Current time: `"05:50"` → Next special time: `"10:01"` → Answer: `251`
- Current time: `"22:00"` → Next special time: `"22:22"` → Answer: `22`

#### Constraints

- Input is valid 24-hour format (`"00:00"` to `"23:59"`)
- Must handle day transitions (`"23:59"` → `"00:00"`)
- Must return the **minimum** number of minutes needed

---

### My Approach (Pseudocode)

- **Step 1**
  - For the given hour `HH`, try to form a special time by setting minutes to `reverse(HH)`.
  - If `reverse(HH)` is a valid minute value (`0–59`) and is not earlier than the current minutes (when using the same hour), compute and return the difference.

- **Step 2**
  - Otherwise, increment the hour (handle wrap-around from `23` → `00`) and repeat Step 1.

---

### Code I Wrote (Partial)

I couldn’t fully implement the solution within the given time, but the interviewer was satisfied with my approach and pseudocode.

```cpp
#include <bits/stdc++.h>
using namespace std;

string getReverseMinutes(string s) {
    // reverse(s.begin(), s.end());
    string result = "";
    return result;
}

int checkForMinutes(string & currTime) {
    // Step 1: For Given time, Try to make minutes = reverse(hours). If it is possible then return than
    string minutesStr = currTime.substr(3, 2);
    int minutes = stoi(minutesStr);

    string hoursStr = currTime.substr(0, 2);
    int hours = stoi(hoursStr);

    string reversedMinutes = getReverseMinutes(minutesStr);
    // cout << "reversedMinutes are " << reversedMinutes << endl;

    if(hoursStr == reversedMinutes) {
        if(stoi(reversedMinutes) < 60) {
            return stoi(reversedMinutes) - minutes;
        }
    }
}

int solve(string& currTime) {
    // // Step 2:
    // int currHour= hours+1;
    // while(currHour != hours) {

    //     if(currHour == 23) {
    //         currHour = 00
    //     } else {
    //         currHour++;
    //     }
    // }

    return 0;
}

int main()
{
    string currTime = "12:12";
    int result = solve(currTime);
    cout << "resutl is " << result << endl;

    return 0;
}
```

### Feedback

At the end, I asked for feedback. He suggested that I should focus more on real-world projects. He said DSA is fine, but it’s not the primary thing companies look for.

### Verdict

Rejected