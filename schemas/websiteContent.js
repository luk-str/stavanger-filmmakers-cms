import { BiPen as icon } from "react-icons/bi";

export default {
  name: "websiteContent",
  title: "Website Texts",
  type: "document",
  icon,
  fields: [
    {
      name: "contentTag",
      type: "string",
      title: "Content Tag",
      description: "Please don't change this field.",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Info on what this is.",
    },
    {
      name: "content",
      type: "blockContent",
      title: "Content",
      description: "Edit this :)",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "icon" },
  },
};
