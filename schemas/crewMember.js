export default {
  name: "crewMember",
  title: "Crew Member",
  type: "object",
  fields: [
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
  preview: {
    select: {
      name: "person.name",
      job: "job",
      media: "person.image",
    },
    prepare(selection) {
      const { name, job, media } = selection;
      return {
        title: name,
        subtitle: `${job}`,
        media,
      };
    },
  },
};
