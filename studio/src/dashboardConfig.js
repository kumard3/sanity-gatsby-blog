export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6075555ec0ad5582365a7c41",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ajg1uzt5",
                  apiId: "e4e36085-8b17-466a-8f17-14c546c24181",
                },
                {
                  buildHookId: "6075555e9860bf7243f48082",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-21i18eec",
                  apiId: "6ad6ebe3-ccd2-4b5d-97c8-b28c0a061950",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kumard3/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-21i18eec.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
