import {
  Users,
  Heart,
  Music,
  BookOpen,
  Cross,
  HandHeart,
  Briefcase,
  Globe,
} from "lucide-react";

export const branches = [
  {
    id: "st-charles",
    name: "St Charles",
    address: "123 Unity Avenue, Nairobi, Kenya",
    established: "1988-04-15",
    history:
      "St Charles began as a small prayer group in 1988 and has grown into a vibrant church serving the Nairobi community through worship, outreach, and fellowship.",
    inspirationMessage:
      "Let your faith be bigger than your fears. Walk in love and serve with joy.",

    leadership: [
      {
        name: "Rev. Peter Mwangi",
        role: "Senior Pastor",
        description:
          "Rev. Mwangi leads the St Charles congregation with passion for prayer, teaching, and community empowerment.",
        image: "🙏",
      },
      {
        name: "Mary Njeri",
        role: "Worship Leader",
        description:
          "Mary directs the worship team and ensures every service is filled with spiritual and musical excellence.",
        image: "🎵",
      },
      {
        name: "James Kariuki",
        role: "Youth Coordinator",
        description:
          "James guides the youth ministry, fostering leadership and discipleship among young believers.",
        image: "🧑‍🤝‍🧑",
      },
      {
        name: "Grace Wambui",
        role: "Church Secretary",
        description:
          "Grace manages church records and communication with warmth and professionalism.",
        image: "📋",
      },
    ],

    ministries: [
      {
        name: "Youth Fellowship",
        leader: "James Kariuki",
        location: "Main Hall",
        schedule: "Saturdays, 2:00 PM",
        icon: Users,
        description:
          "Engaging the next generation through mentorship, worship, and service.",
      },
      {
        name: "Men's Ministry",
        leader: "Joseph Kamau",
        location: "Community Center",
        schedule: "Every 2nd Sunday, 4:00 PM",
        icon: Heart,
        description:
          "Empowering men to lead with integrity, humility, and faith.",
      },
      {
        name: "Women's Guild",
        leader: "Grace Wambui",
        location: "Fellowship Room",
        schedule: "Fridays, 5:30 PM",
        icon: Heart,
        description:
          "Supporting women through prayer, outreach, and sisterhood.",
      },
      {
        name: "Sunday School",
        leader: "Alice Mwangi",
        location: "Children's Wing",
        schedule: "Sundays, 9:00 AM",
        icon: BookOpen,
        description:
          "Nurturing young hearts with biblical teaching and fun learning activities.",
      },
    ],

    moreInfo: [
      {
        title: "Mission Statement",
        content:
          "To build a Christ-centered community that reflects God's love through service and faith.",
      },
      {
        title: "Community Engagement",
        content:
          "St Charles runs food drives, mentorship programs, and support for underprivileged families.",
      },
      {
        title: "Our Belief",
        content:
          "We believe in the transforming power of God's Word and the importance of unity in the body of Christ.",
      },
    ],
    contact: {
      phone: "+254 711 112 233",
      email: "support@stmonicachurch.org",
    },
  },

  {
    id: "st-francis",
    name: "St Francis",
    address: "45 Peace Road, Mombasa, Kenya",
    established: "1995-09-22",
    history:
      "Founded in 1995, St Francis Church is a beacon of peace and faith in Mombasa, known for its vibrant worship and strong outreach programs.",
    inspirationMessage:
      "Be the light that shines even in the darkest places. Serve with grace and gratitude.",

    leadership: [
      {
        name: "Rev. John Odhiambo",
        role: "Lead Pastor",
        description:
          "Rev. Odhiambo leads with a heart for mission, prayer, and unity across all parishes.",
        image: "✝️",
      },
      {
        name: "Evelyn Achieng",
        role: "Choir Director",
        description:
          "Evelyn inspires worship through song and musical excellence.",
        image: "🎶",
      },
      {
        name: "Samuel Mutua",
        role: "Evangelism Lead",
        description:
          "Samuel coordinates evangelism and outreach programs throughout the region.",
        image: "📢",
      },
      {
        name: "Lucy Mwende",
        role: "Administrator",
        description:
          "Lucy ensures smooth church operations and communication across teams.",
        image: "🗂️",
      },
    ],

    ministries: [
      {
        name: "Evangelism Team",
        leader: "Samuel Mutua",
        location: "Mission Office",
        schedule: "Wednesdays, 6:00 PM",
        icon: Cross,
        description:
          "Bringing the gospel to the streets, homes, and hearts of Mombasa.",
      },
      {
        name: "Choir Ministry",
        leader: "Evelyn Achieng",
        location: "Main Sanctuary",
        schedule: "Fridays, 5:00 PM",
        icon: Music,
        description: "Raising voices and spirits through song and praise.",
      },
      {
        name: "Family Support Group",
        leader: "Peter Kilonzo",
        location: "Community Hall",
        schedule: "Monthly, 3rd Sunday, 3:00 PM",
        icon: Heart,
        description:
          "Providing counseling, mentorship, and prayer for families in need.",
      },
    ],

    moreInfo: [
      {
        title: "Church Outreach",
        content:
          "We run coastal cleanup drives and youth evangelism tours across the region.",
      },
      {
        title: "Our Vision",
        content: "To be a lighthouse of hope and faith in Mombasa and beyond.",
      },
      {
        title: "Partnerships",
        content:
          "St Francis partners with local NGOs to support education and social welfare.",
      },
    ],
    contact: {
      phone: "+254 711 112 233",
      email: "support@stmonicachurch.org",
    },
  },

  {
    id: "st-andrew",
    name: "St Andrew",
    address: "12 Hope Street, Kisumu, Kenya",
    established: "2001-06-10",
    history:
      "St Andrew Church was established in 2001 to serve the lakeside community of Kisumu, uniting believers in faith, worship, and community service.",
    inspirationMessage: "Faith grows when shared; serve with humility and joy.",

    leadership: [
      {
        name: "Rev. Michael Onyango",
        role: "Parish Pastor",
        description:
          "Rev. Onyango is passionate about family ministry, youth discipleship, and community empowerment.",
        image: "🙏",
      },
      {
        name: "Sarah Akinyi",
        role: "Music Director",
        description:
          "Sarah leads the music and worship ministry, inspiring hearts through praise.",
        image: "🎤",
      },
      {
        name: "David Otieno",
        role: "Youth Minister",
        description:
          "David oversees youth programs and evangelism across Kisumu parishes.",
        image: "🧑‍🤝‍🧑",
      },
    ],

    ministries: [
      {
        name: "Music and Worship",
        leader: "Sarah Akinyi",
        location: "Sanctuary Hall",
        schedule: "Thursdays, 6:00 PM",
        icon: Music,
        description:
          "Inspiring hearts through worship, praise, and music excellence.",
      },
      {
        name: "Men of Faith",
        leader: "George Ochieng",
        location: "Church Courtyard",
        schedule: "Every 1st Sunday, 3:00 PM",
        icon: Heart,
        description: "Building godly men for strong families and leadership.",
      },
      {
        name: "Youth Empowerment Group",
        leader: "David Otieno",
        location: "Youth Center",
        schedule: "Saturdays, 10:00 AM",
        icon: Users,
        description:
          "Mentoring young people to live purpose-driven and Christ-centered lives.",
      },
    ],

    moreInfo: [
      {
        title: "Mission Focus",
        content:
          "To inspire the next generation to grow in Christ and serve the Kisumu community faithfully.",
      },
      {
        title: "Social Outreach",
        content:
          "We provide food and educational support to children in low-income families around the lakeside area.",
      },
      {
        title: "Our Commitment",
        content:
          "We are dedicated to inclusivity, compassion, and impactful community service.",
      },
    ],
    contact: {
      phone: "+254 711 112 233",
      email: "support@stmonicachurch.org",
    },
  },

  {
    id: "st-monica",
    name: "St Monica",
    address: "78 Grace Lane, Nakuru, Kenya",
    established: "2005-03-18",
    history:
      "St Monica Church began as a small chapel and has grown into one of Nakuru’s most active Christian centers, focusing on education and family ministries.",
    inspirationMessage:
      "Serve faithfully, love deeply, and walk humbly before God.",

    leadership: [
      {
        name: "Rev. Paul Maina",
        role: "Resident Pastor",
        description:
          "Rev. Maina leads with compassion and vision for a growing community of believers.",
        image: "✝️",
      },
      {
        name: "Catherine Njeri",
        role: "Community Outreach Coordinator",
        description:
          "Catherine organizes charity events and outreach missions across Nakuru County.",
        image: "🤝",
      },
      {
        name: "Joseph Kimani",
        role: "Elder Board Chair",
        description:
          "Joseph provides strategic guidance for church projects and ministries.",
        image: "📜",
      },
    ],

    ministries: [
      {
        name: "Outreach & Charity",
        leader: "Catherine Njeri",
        location: "Community Wing",
        schedule: "Wednesdays, 3:00 PM",
        icon: HandHeart,
        description:
          "Serving the community through feeding programs and school drives.",
      },
      {
        name: "Bible Study Group",
        leader: "Joseph Kimani",
        location: "Conference Room",
        schedule: "Tuesdays, 6:00 PM",
        icon: BookOpen,
        description:
          "Deepening faith through guided study and scripture meditation.",
      },
      {
        name: "Worship Choir",
        leader: "Mary Wairimu",
        location: "Main Hall",
        schedule: "Fridays, 5:00 PM",
        icon: Music,
        description:
          "Leading worship in spirit and truth with beautiful harmonies and devotion.",
      },
    ],

    moreInfo: [
      {
        title: "Education Mission",
        content:
          "We sponsor children through school and provide mentorship for youth leadership.",
      },
      {
        title: "Faith in Action",
        content:
          "Our church serves as a beacon of hope, offering counseling and outreach for families in crisis.",
      },
      {
        title: "Our Promise",
        content:
          "To spread love through practical acts of service and unwavering faith.",
      },
    ],
    contact: {
      phone: "+254 711 112 233",
      email: "support@stmonicachurch.org",
    },
  },

  {
    id: "st-gabriel",
    name: "St Gabriel",
    address: "32 Trinity Road, Eldoret, Kenya",
    established: "2010-11-27",
    history:
      "Founded in 2010, St Gabriel Church stands as a symbol of unity and renewal for the Eldoret community, known for strong youth engagement and missions.",
    inspirationMessage:
      "Go forth in faith and let your life be a message of hope.",

    leadership: [
      {
        name: "Rev. Stephen Kiptoo",
        role: "Senior Pastor",
        description:
          "Rev. Kiptoo brings energy and vision to missions, youth development, and church planting.",
        image: "🕊️",
      },
      {
        name: "Anne Jepchirchir",
        role: "Women Ministry Lead",
        description:
          "Anne encourages women to lead in faith and family strength through prayer and mentorship.",
        image: "💐",
      },
      {
        name: "Mark Cheruiyot",
        role: "Mission Coordinator",
        description:
          "Mark manages outreach missions across Uasin Gishu and neighboring counties.",
        image: "🌍",
      },
    ],

    ministries: [
      {
        name: "Mission Team",
        leader: "Mark Cheruiyot",
        location: "Mission Office",
        schedule: "Every 2nd Saturday, 10:00 AM",
        icon: Globe,
        description:
          "Organizing regional missions and spreading the Word to rural communities.",
      },
      {
        name: "Prayer and Intercession",
        leader: "Rev. Stephen Kiptoo",
        location: "Prayer Room",
        schedule: "Daily, 6:00 AM",
        icon: Cross,
        description:
          "Building a praying community grounded in the Word and Spirit.",
      },
      {
        name: "Business Fellowship",
        leader: "John Ruto",
        location: "Upper Hall",
        schedule: "Fridays, 7:00 PM",
        icon: Briefcase,
        description:
          "Equipping professionals and entrepreneurs to live out their faith in the marketplace.",
      },
    ],

    moreInfo: [
      {
        title: "Our Core Values",
        content:
          "We believe in prayer, service, and excellence in all things for God's glory.",
      },
      {
        title: "Mission Outreach",
        content:
          "St Gabriel actively supports rural churches with resources and pastoral training.",
      },
      {
        title: "Faith Declaration",
        content:
          "Through Christ, we are called to transform our communities with love and truth.",
      },
    ],
    contact: {
      phone: "+254 711 112 233",
      email: "support@stmonicachurch.org",
    },
  },
];
