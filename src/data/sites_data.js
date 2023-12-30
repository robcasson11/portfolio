const sites = [
  {
    id: 1,
    title: "Login Template",
    image: "Images/loginTemplateImage.jpg",
    cardDescription:
      "A simple, custom login form that can be added to any React project to restrict access via a username and password.",
    mainDescription: (
      <p>
        The majority of the “projects” I've set myself have been created as an
        example of my ability. Often, these projects might contain information
        that needs to be kept private. As a result, this “login template” has
        been built as a boilerplate for any project using React. It simply
        requires a Login and Password from the user before they can view the
        site. As an added feature, the template allows “roles” to be distributed
        to different users allowing access to different parts/routes of the
        site. To demonstrate the project, a small “tester” site has been
        deployed for you to experiment. Go to the site and login as either:
        <br />
        <br />
        Username: Admin
        <br />
        <br />
        Or
        <br />
        <br />
        UserName: Visitor
        <br />
        <br />
        Since this is an example site the password for both is 321
        <br />
        <br />
        Both users have access to their specific page, but the “Admin” has
        access to all the pages, whereas the “Visitor” will be “unauthorised” if
        they try to access the admin page.
      </p>
    ),
    links: {
      "Deployed Site": "https://login-y15k.onrender.com/",
      "Frontend Code": "https://github.com/robcasson11/auth_template_frontend",
      "Backend Code": "https://github.com/robcasson11/auth_template_backend",
    },
    stack: ["React", "NodeJS", "Express", "MongoDB", "HTML", "CSS", "SASS"],
    path: "loginTemplate",
  },
  {
    id: 2,
    title: "The Platinum Forge",
    image: "Images/thePlatinumForge.jpg",
    cardDescription:
      "Acting as a 'Pallet' to experiment with alongside learning, 'The Platinum Forge' provided a long term goal that required solutions not yet realised. It may be in need of a refactor, however immense pride runs through the accomplishment of this app",
    mainDescription: (
      <p>
        This is an in depth to-do list for a small business that repairs
        “items”. The "tasks" (or in this case "items") are displayed via feeds.
        The feeds determine which "items" to display based on either, what it
        needs, when it needs to be completed, whether it is completed or if it
        has been collected.
      </p>
    ),
    links: {
      GitHub: "https://github.com/robcasson11/platinumForge",
    },
    stack: ["React", "NodeJS", "Express", "MongoDB", "HTML", "CSS"],
    path: "platinumForge",
  },
  {
    id: 3,
    title: "What The Duck?!?",
    image: "Images/whatTheDuckImage.jpg",
    cardDescription:
      "A static website built to promote a wedding band named 'What The Duck?!?'",
    mainDescription: (
      <p>
        A website built as a networking tool for a function/wedding band named
        'What The Duck?!?''. The website displays information about the band,
        youtube links, email and contact details and other forms of
        media/pictures. <br />
        <br />
        It shouldn't be a challenge for a developer to create using the basic
        tools. This site is built from html, css and a tiny bit of javascript.
        This serves the purpose and proves that frameworks and libraries aren't
        always required. Sometimes it's nice to remember where it all came from
        and do some grass-roots coding.
      </p>
    ),
    links: { "Deployed Site": "http://whattheduckmusic.co.uk" },
    stack: ["HTML", "CSS", "Javascript"],
    path: "whatTheDuck",
  },
];

export default sites;
