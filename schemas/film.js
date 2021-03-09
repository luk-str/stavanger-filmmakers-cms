import { MdLocalMovies as icon } from "react-icons/md";

export default {
  name: "film",
  title: "Films",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
      description: "e.g. Horror, Drama, Short Film",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "The url of the film on our website. Best to just click 'Generate'!",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "videoLink",
      type: "url",
      title: "YouTube / Vimeo Link",
      description:
        "To get a clean link, click on the 'share' button on youtube and make sure that the 'Start at: ' option is turned off.",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      description:
        "Short description of the project. Don't include credits as these have a separate field.",
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
      name: "links",
      title: "Links",
      type: "array",
      description: "Links to the film's other websites on the internet",
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
                  "vimeo",
                  "facebook",
                  "twitter",
                  "instagram",
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
