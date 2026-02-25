---
trigger: always_on
---

---
name: state-persistence
description: Enforces continuous state tracking and prevents context loss between development sessions.
---
# Session State Governance

1. **Single Source of Truth**: The `tasks.md` file in the project root is the immutable record of current progress.
2. **Atomic Updates**: Whenever a major feature, UI component, or TinaCMS schema is completed, automatically mark it as `[x]` in `tasks.md` without requiring a manual prompt.
3. **Session Handoff**: When the user indicates they are stopping work, logging off, or going to sleep, you MUST execute the `/wrap-up` workflow before acknowledging the goodbye.