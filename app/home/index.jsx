// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import './home.css';

export default function Home() {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-20 bg-white shadow-lg rounded-xl my-8">
      {/* Hero Section */}
      <div className="text-center">
        <Image
          src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Sanjok%20Dangol&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Senior%20Laravel%20Developer%20%7C%20Project%20Manager&descSize=16&descAlignY=51"
          alt="Sanjok Dangol Header"
          width={1200}
          height={180}
          layout="responsive"
          objectFit="cover"
        />

        <Image
          src="https://media.licdn.com/dms/image/v2/D4D03AQHkGp3wcGtGzw/profile-displayphoto-shrink_800_800/B4DZZI7xoWHAAg-/0/1744980352309?e=1769040000&v=beta&t=4CsbMGUIVJ-oZlOZ2rRVR0LO5K776fgaPwTOeBo_q6I"
          alt="Sanjok Dangol"
          width={180}
          height={180}
          className="rounded-full shadow-lg my-5"
        />

        <p className="mb-4">
          <Link href="https://git.io/typing-svg" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=3B82F6&center=true&vCenter=true&multiline=false&repeat=true&width=600&lines=Building+Scalable+Web+Applications;Leading+Technical+Teams+to+Success;Solving+Complex+Problems+Daily;Backend+Architecture+Expert"
              alt="Typing SVG"
              width={600}
              height={50}
              layout="responsive"
            />
          </Link>
        </p>

        <p className="text-lg italic text-gray-700 mb-6">
          Passionate about crafting robust, scalable solutions that make an impact
        </p>

        {/* Social Badges */}
        <div className="social-badges flex flex-wrap justify-center gap-3 mb-8">
          <Link href="https://sanjok1988.github.io/" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.shields.io/badge/🌐_Portfolio-4A90E2?style=for-the-badge&logoColor=white" alt="Portfolio" width={100} height={28} />
          </Link>
          <Link href="mailto:sanjokdangol1@gmail.com">
            <Image src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" width={100} height={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/sanjok-dangol-a7207186/" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" width={100} height={28} />
          </Link>
          <Link href="https://twitter.com/DangolSanjog" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" width={100} height={28} />
          </Link>
          <Link href="https://www.upwork.com/freelancers/~012bdcd875f56cd8c6" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.shields.io/badge/Upwork-6FDA44?style=for-the-badge&logo=upwork&logoColor=white" alt="Upwork" width={100} height={28} />
          </Link>
          <Link href="https://www.youtube.com/@computingwithsanjok3402" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" width={100} height={28} />
          </Link>
        </div>

        <Image
          src="https://komarev.com/ghpvc/?username=sanjok1988&style=for-the-badge&color=3B82F6&label=PROFILE+VIEWS"
          alt="Profile Views"
          width={200}
          height={28}
          className="my-5"
        />
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* About Me */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🚀 About Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        I am a highly experienced <strong className="font-semibold">Senior Laravel Developer and Project Manager</strong> with a proven track record in architecting and delivering high-performance web applications. My expertise spans the full software development lifecycle, from robust backend development and API design to seamless system integration and deployment.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        As a <strong className="font-semibold">Project Manager</strong>, I excel at leading cross-functional teams, fostering clear communication, and implementing agile methodologies to ensure projects are delivered efficiently, on time, and within budget. I am dedicated to continuous improvement, always seeking innovative solutions to enhance productivity and achieve business objectives.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        My passion lies in leveraging cutting-edge technologies to solve real-world problems and create impactful digital experiences. I am adept at navigating complex technical challenges and committed to fostering collaborative environments that drive innovation and success.
      </p>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Tech Stack */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🛠️ Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-3 my-5">
        <Image src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" width={100} height={28} />
        <Image src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" width={100} height={28} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-5">
        <Image src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" width={100} height={28} />
        <Image src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" width={100} height={28} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-5">
        <Image src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" width={100} height={28} />
        <Image src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI API" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Stripe-008CDE?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" width={100} height={28} />
        <Image src="https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white" alt="Google Maps" width={100} height={28} />
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Featured Projects */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">✨ Featured Projects</h2>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">🎓 Global English Campus (AI Educational Platform)</h3>
      <div className="flex gap-2 mb-3">
        <Link href="https://edu.globalenglishcampus.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
        <Link href="https://www.youtube.com/watch?v=hDZZ_ZpZmWU&list=PLXJcw72lA2KQZhF0ZsgNcuoJWgdff7HlF" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Project_Video-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Video" width={100} height={28} />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">Comprehensive AI-powered educational web app with <strong className="font-semibold">Laravel, OpenAI, AWS (SES, S3), MySQL</strong>. OTP auth, custom AI assistants, voice-to-text.</p>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">⏱️ Workzone1 (Time Tracker & PM Tool)</h3>
      <div className="flex gap-2 mb-3">
        <Link href="https://workzone1.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">Full-stack app: <strong className="font-semibold">NextJS/TS/Tailwind</strong> frontend, <strong className="font-semibold">NestJS/MySQL/TypeORM</strong> backend. AWS Amplify/EC2 deploy. Google Maps integration.</p>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">🏠 DATABLOCK (AI Real Estate)</h3>
      <div className="flex gap-2 mb-3">
        <Link href="https://datablockai.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">AI image processing with <strong className="font-semibold">Replicate/OpenAI</strong>. <strong className="font-semibold">Express/TS/Mongo/Stripe</strong> backend, <strong className="font-semibold">NextJS/Tailwind</strong> UI. Role-based auth, subscriptions.</p>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">📰 NuwaKot News Portal</h3>
      <div className="flex gap-2 mb-3">
        <Link href="https://nuwakotnews.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">Modern news platform built with <strong className="font-semibold">Laravel/MySQL</strong>. Scalable CMS with admin dashboard.</p>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">🌐 Nepal Dristi</h3>
      <div className="flex gap-2 mb-3">
        <Link href="https://nepaldristi.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">Dynamic web portal with <strong className="font-semibold">Laravel</strong> backend, responsive design, and content management features.</p>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Experience */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">💼 Experience</h2>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">Software Engineer I | Global English Campus</h3>
      <p className="text-lg text-gray-700 mb-2"><strong>Jan 2022 - Present</strong></p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
        <li>Led the development and scaling of the AI-powered educational platform used by 10K+ users</li>
        <li>Implemented core backend systems using Laravel, integrating OpenAI API for custom AI assistants and voice-to-text features</li>
        <li>Optimized database queries and system architecture, reducing application response time by 40%</li>
        <li>Managed AWS infrastructure (SES, S3) for email communication and file storage, ensuring 99.9% uptime</li>
        <li>Mentored 5+ junior developers, establishing coding standards and best practices for the team</li>
        <li>Collaborated with cross-functional teams to deliver project milestones on schedule, maintaining a 100% success rate</li>
      </ul>
      <div className="flex gap-2 mb-6">
        <Link href="https://edu.globalenglishcampus.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
        <Link href="https://www.youtube.com/watch?v=hDZZ_ZpZmWU&list=PLXJcw72lA2KQZhF0ZsgNcuoJWgdff7HlF" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Project_Video-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Video" width={100} height={28} />
        </Link>
      </div>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">Project Manager | Workzone1</h3>
      <p className="text-lg text-gray-700 mb-2"><strong>Jun 2021 - Jan 2022</strong></p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
        <li>Oversaw end-to-end development of the Workzone1 Time Tracker & PM Tool, a full-stack application with NextJS frontend and NestJS backend</li>
        <li>Implemented Agile/Scrum methodologies, reducing project delivery time by 30% and improving team efficiency</li>
        <li>Coordinated with 12+ developers, designers, and QA specialists to ensure alignment with client requirements</li>
        <li>Managed AWS deployment (Amplify, EC2) and integrated Google Maps API for location-based features</li>
        <li>Maintained regular client communication, providing weekly progress updates and addressing feedback promptly</li>
      </ul>
      <div className="flex gap-2 mb-6">
        <Link href="https://workzone1.com" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Live_Demo-EDD459?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo" width={100} height={28} />
        </Link>
      </div>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">Project Manager | Letitu</h3>
      <p className="text-lg text-gray-700 mb-2"><strong>Sep 2025 - Present</strong></p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
        <li>Lead a cross-functional team of 25+ developers on enterprise-level web application projects</li>
        <li>Streamlined project workflows and implemented risk management strategies, reducing delivery delays by 25%</li>
        <li>Facilitate client meetings to define project scope, requirements, and success metrics</li>
        <li>Monitor project budgets and resource allocation, ensuring projects are delivered within financial constraints</li>
        <li>Drive continuous improvement initiatives, adopting new tools and processes to enhance team productivity</li>
      </ul>

      <h3 className="text-2xl text-gray-800 mt-6 mb-3 font-semibold">Self Employed | Independent Developer & Content Creator</h3>
      <p className="text-lg text-gray-700 mb-2"><strong>Jan 2018 - Present</strong></p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
        <li>Delivered 50+ custom web development projects for clients globally, achieving a 100% client satisfaction rate on Upwork</li>
        <li>Maintain a YouTube channel with tutorials on Laravel, PHP, and web development, growing a community of 10K+ subscribers</li>
        <li>Provide freelance consulting services for backend architecture design and project management</li>
        <li>Built and managed multiple client projects using Laravel, MySQL, Docker, and AWS technologies</li>
        <li>Authored technical blog posts on portfolio site, sharing insights on web development best practices</li>
      </ul>
      <div className="flex gap-2 mb-6">
        <Link href="https://www.upwork.com/freelancers/~012bdcd875f56cd8c6" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/Upwork_Profile-6FDA44?style=for-the-badge&logo=upwork&logoColor=white" alt="Upwork" width={100} height={28} />
        </Link>
        <Link href="https://www.youtube.com/@computingwithsanjok3402" target="_blank" rel="noopener noreferrer">
          <Image src="https://img.shields.io/badge/YouTube_Channel-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" width={100} height={28} />
        </Link>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Key Metrics & Achievements */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">📈 Key Metrics & Achievements</h2>
      <div className="flex justify-center my-8">
        <table className="w-full max-w-2xl border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">Metric</th>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">Value</th>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>Total Projects</strong></td>
              <td className="p-4 text-left border-b border-gray-200">50+</td>
              <td className="p-4 text-left border-b border-gray-200">✅ Active</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>Lines of Code</strong></td>
              <td className="p-4 text-left border-b border-gray-200">100K+</td>
              <td className="p-4 text-left border-b border-gray-200">✅ Maintained</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>GitHub Followers</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Growing Community</td>
              <td className="p-4 text-left border-b border-gray-200">📈 Increasing</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>Years of Experience</strong></td>
              <td className="p-4 text-left border-b border-gray-200">6+</td>
              <td className="p-4 text-left border-b border-gray-200">✅ Verified</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>Projects Delivered</strong></td>
              <td className="p-4 text-left border-b border-gray-200">100% Success Rate</td>
              <td className="p-4 text-left border-b border-gray-200">✅ Perfect Record</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200"><strong>Average Response Time</strong></td>
              <td className="p-4 text-left border-b border-gray-200">&lt;4 hours</td>
              <td className="p-4 text-left border-b border-gray-200">⚡ Quick</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Client Testimonials */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">💬 Client Testimonials</h2>

      <div className="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
        <h3 className="text-2xl text-gray-800 mb-3 font-semibold">Upwork Project: Laravel, Vue.js, MySQL Expert for LMS Development</h3>
        <p className="text-lg text-gray-700 mb-4"><strong>Dec 21, 2022 - Feb 10, 2023 | $290.00 Earned | Fixed Price</strong></p>

        <div className="stars text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐ (5.0 out of 5)</div>
        <p className="text-lg italic text-gray-700 mb-4">
          "Sanjok is a highly skilled and expert developer. He is very cooperative, humble, and has very good communication with the client. I really like him as a professional. He is our first choice for all our future development work."
        </p>

        <p className="text-lg text-gray-700 mb-4"><strong>Strengths Recognized:</strong> Committed to Quality | Collaborative | Clear Communicator | Professional</p>

        <div className="mt-6">
          <p className="text-lg text-gray-700 mb-2"><strong>My Review of the Client:</strong></p>
          <div className="stars text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐ (5.0 out of 5)</div>
          <p className="text-lg italic text-gray-700 mb-2">
            "It was really fun working on this project with Gaurav sir! It is very easy to work with him, which makes the project that much more enjoyable. I would be pleased to work with him again in the future."
          </p>
        </div>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Education */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🎓 Education</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Master Degree | Coventry University London</strong><br />
          <em>2023 - 2025</em>
        </li>
        <li>
          <strong>BSc (Hons) Computing | UCSI University</strong><br />
          <em>2017 - 2020</em>
        </li>
      </ul>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Recent Highlights */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🌟 Recent Highlights</h2>
      <div className="flex justify-center my-8">
        <table className="w-full max-w-4xl highlights-table border-collapse">
          <tbody>
            <tr className="md:flex md:flex-wrap md:justify-center md:gap-4">
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-blue-50 border-l-4 border-indigo-600 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ Launched AI Platform</strong>
                <span className="text-lg text-gray-700">Global English Campus reached 10K+ users in 6 months</span>
              </td>
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-pink-50 border-l-4 border-rose-500 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ Performance Boost</strong>
                <span className="text-lg text-gray-700">Reduced response time by 40% through optimization</span>
              </td>
            </tr>
            <tr className="md:flex md:flex-wrap md:justify-center md:gap-4">
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-cyan-50 border-l-4 border-cyan-500 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ User Engagement</strong>
                <span className="text-lg text-gray-700">Implemented AI features improving engagement by 60%</span>
              </td>
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-green-50 border-l-4 border-emerald-500 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ Team Management</strong>
                <span className="text-lg text-gray-700">Successfully managed team of 25+ developers</span>
              </td>
            </tr>
            <tr className="md:flex md:flex-wrap md:justify-center md:gap-4">
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-orange-50 border-l-4 border-amber-400 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ Uptime Excellence</strong>
                <span className="text-lg text-gray-700">Achieved 99.9% uptime over 12 months</span>
              </td>
              <td className="md:w-full lg:w-1/2 p-4 mb-4 bg-purple-50 border-l-4 border-fuchsia-400 rounded-lg">
                <strong className="block text-xl text-gray-900 mb-1">✅ Freelance Success</strong>
                <span className="text-lg text-gray-700">100% client satisfaction across 50+ projects</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Software Development Team Management */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🚀 Software Development Team Management – Core Laws That I Follow</h2>
      <div className="flex justify-center my-8">
        <table className="w-full max-w-3xl border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">#</th>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">Principle</th>
              <th className="p-4 text-left bg-gray-50 font-bold text-gray-700 border-b border-gray-200">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-left border-b border-gray-200">1️⃣</td>
              <td className="p-4 text-left border-b border-gray-200"><strong>🎯 Clear Requirements</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Build the right thing before building it right.</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200">2️⃣</td>
              <td className="p-4 text-left border-b border-gray-200"><strong>💬 Strong Communication</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Clear communication beats tools and processes.</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200">3️⃣</td>
              <td className="p-4 text-left border-b border-gray-200"><strong>👥 People First</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Trust and empower people over rigid processes.</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200">4️⃣</td>
              <td className="p-4 text-left border-b border-gray-200"><strong>⚡ Small Tasks & Fast Feedback</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Smaller tasks reduce risk and improve quality.</td>
            </tr>
            <tr>
              <td className="p-4 text-left border-b border-gray-200">5️⃣</td>
              <td className="p-4 text-left border-b border-gray-200"><strong>🛠 Leadership as Support</strong></td>
              <td className="p-4 text-left border-b border-gray-200">Leaders unblock teams, not micromanage them.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Let's Collaborate */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">🤝 Let's Collaborate!</h2>
      <div className="text-center max-w-3xl mx-auto my-8">
        <p className="text-xl text-gray-700 mb-6">
          I'm always excited about:
        </p>
        <ul className="list-none p-0 text-lg text-gray-700 space-y-2">
          <li>💡 Innovative project ideas</li>
          <li>🚀 Challenging technical problems</li>
          <li>👥 Collaborating with talented teams</li>
          <li>📚 Knowledge sharing & learning</li>
          <li>🎯 Building impactful products</li>
          <li>🌍 Open-source contributions</li>
        </ul>
        <p className="text-2xl font-semibold mt-8">
          <Link href="mailto:sanjokdangol1@gmail.com" className="text-blue-500 hover:underline">Feel free to reach out for any collaboration opportunities!</Link>
        </p>
      </div>

      <hr className="my-10 border-t-2 border-gray-200" />

      {/* Final Words */}
      <h2 className="text-4xl text-gray-900 mb-5 pb-2 border-b-4 border-blue-500 inline-block font-semibold">⚡ Final Words</h2>
      <div className="text-center my-8">
        <pre className="bg-gray-50 p-6 rounded-lg block font-mono text-base whitespace-pre-wrap leading-relaxed text-gray-800">
          <code>
            While True:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Code() ☕<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Learn() 📚<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Innovate() 🚀<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Help() 🤝<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Repeat() 🔄
          </code>
        </pre>

        <p className="text-lg text-gray-700 my-6">
          <strong className="font-semibold">🌟 Made with ❤️ and lots of ☕</strong><br />
          <em className="italic">Active Development | Open for Opportunities | Always Learning | Community Driven</em>
        </p>

        <Image
          src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"
          alt="Footer"
          width={1200}
          height={100}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
