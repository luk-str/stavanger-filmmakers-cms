import { BiCalendarEvent as icon } from "react-icons/bi";

export default {
  name: "event",
  title: "Events",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Event title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
      description: "When is it happening?",
    },
    {
      name: "place",
      type: "string",
      title: "Place",
      description: "The name of the venue",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description: "Link to the event site (e.g. meetup or facebook)",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "title", date: "date", media: "icon" },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title: title,
        subtitle: new Date(date).toLocaleString(),
        media: media,
      };
    },
  },
};
