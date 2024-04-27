export const docs = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Next.js, a React framework, provides an enhanced development experience by utilizing caching mechanisms to store compiled pages, static files, and other elements. This caching plays a crucial role in speeding up both development and production builds. However, like any caching system, it can sometimes retain outdated or corrupted data, leading to unexpected behavior in your application.",
  },
  {
    id: "understanding_the_next.js_cache",
    title: "Understanding the Next.js Cache",
    content: (
      <div>
        contained within specific directories and files in your project. It
        includes compiled versions of your pages, cached versions of your static
        assets, and sometimes, even data fetched during build time. This cache
        is essential for the efficient functioning of your Next.js application
        as it reduces build and load times.
        <h4 className="text-xl font-semibold mb-3">The Role of .next</h4>
        Folder At the heart of Next.js caching is the .next folder, generated
        automatically in your project directory. This folder holds the optimized
        production build of your application, including HTML, CSS, JavaScript
        files, and other assets. It’s crucial for the rapid loading and
        rendering of your application, but can sometimes contain stale or
        corrupt data that can cause issues. Significance of node_modules The
        node_modules folder, while not a cache folder per se, plays a
        <h4 className="text-xl font-semibold mb-3">
          significant role in the context of Next.js caching. It contains all
        </h4>
        the packages and dependencies your project relies on, including Next.js
        itself. Sometimes, the issues you face in your application might be
        related to these dependencies, and clearing the cache in node_modules
        can resolve these issues.
      </div>
    ),
  },
  {
    id: "signs_you_need_to_reset_your_cache",
    title: "Signs You Need to Reset Your Cache",
    content: (
      <div>
        Signs You Need to Reset Your Cache There are several signs indicating
        that it might be time to reset your Next.js cache. These include:
        <ul className="list-disc">
          <li>
            Persistent build errors, even after fixing the underlying issues.
          </li>
          <li>Changes in the code not reflecting in the output. Performance</li>
          <li>degradation without any significant changes in the codebase.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "preparing_to_reset_the_cache",
    title: "Preparing to Reset the Cache",
    content: (
      <div>
        Before resetting the cache, it’s important to take a few preparatory
        steps to avoid any loss of data or work.
        <h4 className="text-xl font-semibold mb-3">Backing Up Your Project</h4>
        Always back up your project before making significant changes like
        resetting the cache. You can use version control systems like Git to
        commit your current work. This ensures that you can revert to a stable
        state in case anything goes wrong during the cache reset process.
        <h4 className="text-xl font-semibold mb-3">Dependency Checklist</h4>
        Ensure that all your project dependencies are correctly listed in your
        package.json file. This is crucial because after clearing the cache, you
        will need to reinstall these dependencies. A thorough check can prevent
        any missing dependencies or version conflicts post-reset.
      </div>
    ),
  },
  {
    id: "step-by-step_guide_to_resetting_the_cache",
    title: "Step-by-Step Guide to Resetting the Cache",
    content: (
      <div>
        Here’s how you can reset the Next.js cache in a few simple steps:
        <h4 className="text-xl font-semibold mb-3">
          Deleting the .next Folder
        </h4>
        To delete the .next folder, simply navigate to your project directory
        and remove it. You can do this using a file manager or by running a
        command in your terminal like rm -rf .next. This will clear the compiled
        cache of your application.
        <h4 className="text-xl font-semibold mb-3">
          Removing node_modules Similarly,
        </h4>
        to remove the node_modules directory, use the command rm -rf
        node_modules. This clears all installed dependencies, making way for a
        fresh installation.
        <h4 className="text-xl font-semibold mb-3">
          Clearing Other Cache Locations
        </h4>
        Apart from .next and node_modules, consider clearing any other cache
        locations that might be specific to your development environment. This
        includes global npm cache, which can be cleared using npm cache clean
        --force. After completing these steps, reinstall your dependencies using
        npm install or yarn install, and rebuild your project. This should
        resolve most caching-related issues you’re facing in your Next.js
        project.
      </div>
    ),
  },
];
