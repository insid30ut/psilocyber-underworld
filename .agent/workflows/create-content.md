---
description: Scaffold and create a new markdown entry for Guides or Partners via TinaCMS structure
---

This workflow helps you add new content (e.g. a Guide or Partner) seamlessly using the correct structure.

1. Prompt the user for the type of content they want to create (`Guide` or `Partner`) and the title/name.
2. Based on their input, generate a slugified version of the title to use as the filename (e.g. `My New Guide` -> `my-new-guide`).
3. Create the markdown file in the appropriate directory:
   - For Guides: `content/guides/{slug}.md`
   - For Partners: `content/partners/{slug}.md`
4. Pre-fill the top of the Markdown document with the required Frontmatter that matches the Tina collection schema:
   - Provide standard dummy data or use their input for `title`, `description`, `image`, etc.
5. Create a basic body indicating "Coming Soon" or insert the actual content they requested.
6. Once created, append a task in `tasks.md` noting the creation of this new file.
7. Remind the user they can navigate to `/admin` to edit this new content visually in TinaCMS.
