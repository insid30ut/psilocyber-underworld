---
description: Captures the current repository state, updates tasks.md, and generates a session handoff summary.
---

# Workflow: End of Session Wrap-Up

**Phase 1: State Analysis**
1. Read the current Git status and uncommitted diffs (specifically looking at `src/`, `tina/`, and `content/`).
2. Identify which files were modified during this session.

**Phase 2: Mission Control Sync**
1. Update `tasks.md`.
2. Move completed items to the `[x]` state.
3. Explicitly define the top 3 items in a new `## Next Actions (Start Here Tomorrow)` section.

**Phase 3: Handoff Artifact**
Generate a structured handoff summary in the chat terminal using the following format:

### Session Handoff
- **Completed Today**: [Brief list of achieved architecture/features]
- **WIP / Broken**: [Exactly what is currently mid-flight or failing compilation]
- **Blockers / Notes**: [Any lingering thoughts on Tina schemas, Tailwind UI, or Next.js caching]
- **Suggested Git Commit**: `chore: session wrap-up - [brief summary]`