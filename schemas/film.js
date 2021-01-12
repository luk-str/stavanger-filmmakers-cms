import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "film",
  title: "Film",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "The url of the film on our website. Best to generate automatically",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "castMembers",
      title: "Cast Members",
      type: "array",
      of: [{ type: "castMember" }],
    },
    {
      name: "crewMembers",
      title: "Crew Members",
      type: "array",
      of: [{ type: "crewMember" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
      castName0: "crewMembers.0.person.name",
      castName1: "crewMembers.1.person.name",
    },
    prepare(selection) {
      const year = selection.date && selection.date.split("-")[0];
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(", ");

      return {
        title: `${selection.title} ${year ? `(${year})` : ""}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      };
    },
  },
};
