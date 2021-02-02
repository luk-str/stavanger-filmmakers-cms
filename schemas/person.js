import UserIcon from "part:@sanity/base/user-icon";

export default {
  name: "person",
  title: "People",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The url for the person's page on our website. Best to just click 'Generate'!",
      options: {
        source: "name",
        maxLength: 100,
      },
    },

    {
      name: "role",
      title: "Role",
      type: "string",
      description: "The role of the person in the club (optional)",
    },

    {
      name: "bio",
      title: "Bio",
      type: "blockContent",
      description: "A short bio (optional)",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "links",
      title: "Links",
      type: "array",
      description: "Links to the person's profiles on the internet",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "websiteName",
              title: "Website Name",
              type: "string",
              options: {
                list: [
                  "imdb",
                  "youtube",
                  "facebook",
                  "twitter",
                  "instagram",
                  "spotify",
                  "linkedin",
                  "other website",
                ],
              },
            },
            {
              name: "url",
              title: "url",
              type: "url",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
};
