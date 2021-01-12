import UserIcon from "part:@sanity/base/user-icon";

export default {
  name: "person",
  title: "Person",
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
      options: {
        source: "name",
        maxLength: 100,
      },
      description:
        "The url for the person's page on our website. Best to just click 'Generate'!",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "The role of the person in the club (optional)",
    },
    {
      name: "link",
      title: "Social Link",
      type: "url",
      description:
        "Link to the person's IMDb or some other social page (optional)",
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
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
