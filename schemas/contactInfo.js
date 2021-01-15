import { BiMailSend as icon } from "react-icons/bi";

export default {
  name: "contactInfo",
  title: "Contact Info",
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
      type: "string",
      title: "Content",
      description: "Edit this :)",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "icon" },
  },
};
