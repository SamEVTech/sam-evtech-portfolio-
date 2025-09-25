import Head from 'next/head';
import Link from 'next/link';
import Typed from 'react-typed';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins text-gray-800">
      <Head>
        <title>SamEVTech | Electric Vehicle & IoT Innovator</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <nav className="sticky top-0 bg-white shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">SamEVTech</h1>
          <ul className="flex space-x-6">
            <li><Link href="#home" className="hover:text-emerald-500">Home</Link></li>
            <li><Link href="#about" className="hover:text-emerald-500">About</Link></li>
            <li><Link href="#journey" className="hover:text-emerald-500">Journey</Link></li>
            <li><Link href="#skills" className="hover:text-emerald-500">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-emerald-500">Projects</Link></li>
            <li><Link href="#resume" className="hover:text-emerald-500">Resume</Link></li>
            <li><Link href="#contact" className="hover:text-emerald-500">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="container mx-auto">
          <div className="mb-6">
            <Image src="/profile.jpg" alt="SamEVTech Profile" width={150} height={150} className="rounded-full mx-auto" />
          </div>
          <Typed
            strings={[
              "Hey There! I'm Sam...",
              "EV Specialist @ Tata IIS Mumbai",
              "Power Electronics & BMS Engineer",
              "Arduino & ESP32 Innovator",
              "Building the Electric Future! 🚗⚡️"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-3xl md:text-5xl font-bold"
          />
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">About SamEVTech</h2>
          <p className="text-lg max-w-2xl mx-auto">
            <strong>Hands-on EV Specialist | IoT Innovator | Powering the Electric Revolution ⚡️</strong><br /><br />
            Hey there! I’m Samir (SamEVTech), passionate about Electric Vehicles, IoT systems, and sustainable innovation.
            From designing BMS safety systems to building ESP32-powered IoT dashboards, I thrive on experimenting, prototyping, and learning from every challenge.<br /><br />
            <span className="italic">“Innovation is not about big ideas—it’s about small steps done consistently.”</span>
          </p>
        </div>
      </section>

      <section id="journey" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">My Journey</h2>
          <ul className="text-lg max-w-2xl mx-auto list-disc list-inside">
            <li>📚 EV 2 & 3 Wheeler Specialist, Tata IIS Mumbai, 2025</li>
            <li>🔋 Mastering Battery Management Systems & Power Electronics</li>
            <li>🚗 Developing IoT-enabled EV charging solutions</li>
            <li>🛠️ Building real-world projects in EV, automation, and assistive tech</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Technical Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">EV & Power Systems</h3>
              <p className="text-gray-600 mt-2">
                🔋 EV Battery Systems (Li-ion)<br />
                🛡️ BMS Design & Protection<br />
                ⚡ Power Electronics (Inverters)<br />
                🔌 EV Charging Protocols
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">Electronics & Hardware</h3>
              <p className="text-gray-600 mt-2">
                🔓 Gadget Teardown & Analysis<br />
                🛠️ PCB Design & Prototyping<br />
                📐 Precision Soldering<br />
                🔧 Diagnostic Tools (Oscilloscope)
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">Programming & IoT</h3>
              <p className="text-gray-600 mt-2">
                🎛️ Arduino & ESP32 Programming<br />
                📡 IoT (MQTT, Blynk)<br />
                💻 C++ & Firmware Development<br />
                🖥️ CAN Bus & Vehicle ECU
              </p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <img src="https://img.shields.io/badge/Arduino-00979D?style=flat-square&logo=arduino&logoColor=white" alt="Arduino" />
            <img src="https://img.shields.io/badge/ESP32-3C92D3?style=flat-square&logo=esp32&logoColor=white" alt="ESP32" />
            <img src="https://img.shields.io/badge/BMS-4CAF50?style=flat-square&logo=voltmeter&logoColor=white" alt="BMS" />
            <img src="https://img.shields.io/badge/CAN-Bus-2196F3?style=flat-square&logo=car&logoColor=white" alt="CAN Bus" />
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900">Dual-Axis Solar Tracker</h3>
              <p className="text-gray-600 mt-2">
                Arduino Uno + ESP32 for solar panel tracking. 35% efficiency boost with dual-axis movement. IoT monitoring via Blynk.
              </p>
              <div className="mt-2">
                <img src="https://img.shields.io/badge/Arduino-00979D?style=flat-square&logo=arduino&logoColor=white" alt="Arduino" />
              </div>
              <a href="https://github.com/SamEVTech/Dual-Axis-Solar-Tracker" className="text-emerald-500 mt-4 inline-block">Explore Project →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900">EV Battery Management System</h3>
              <p className="text-gray-600 mt-2">
                ESP32-based monitoring for 48V Li-ion packs. Tracks voltage, current, temperature with CAN Bus integration.
              </p>
              <div className="mt-2">
                <img src="https://img.shields.io/badge/BMS-4CAF50?style=flat-square&logo=voltmeter&logoColor=white" alt="BMS" />
              </div>
              <a href="https://github.com/SamEVTech/EV-BMS-Prototype" className="text-emerald-500 mt-4 inline-block">Explore Project →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900">iPhone Teardown Analysis</h3>
              <p className="text-gray-600 mt-2">
                Full iPhone 12 disassembly with PCB mapping. Analyzed battery, BGA chips, and power ICs.
              </p>
              <div className="mt-2">
                <img src="https://img.shields.io/badge/Teardown-FF6B35?style=flat-square&logo=tools&logoColor=white" alt="Teardown" />
              </div>
              <a href="https://github.com/SamEVTech/iPhone-Teardown-Analysis" className="text-emerald-500 mt-4 inline-block">Explore Project →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900">Industrial Carbon Purification System</h3>
              <p className="text-gray-600 mt-2">
                Arduino-controlled carbon filtration for CO2 & NOx. Sensor array for PM2.5, temperature, humidity.
              </p>
              <div className="mt-2">
                <img src="https://img.shields.io/badge/Environmental-228B22?style=flat-square&logo=leaf&logoColor=white" alt="Environmental" />
              </div>
              <a href="https://github.com/SamEVTech/Carbon-Purification-System" className="text-emerald-500 mt-4 inline-block">Explore Project →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-900">Smart Glasses for Visually Impaired</h3>
              <p className="text-gray-600 mt-2">
                ESP32 + Ultrasonic sensors for obstacle detection. Haptic & audio feedback with 200cm range.
              </p>
              <div className="mt-2">
                <img src="https://img.shields.io/badge/Assistive-Tech-800080?style=flat-square&logo=eye&logoColor=white" alt="Assistive Tech" />
              </div>
              <a href="https://github.com/SamEVTech/Smart-Glasses-for-Blind" className="text-emerald-500 mt-4 inline-block">Explore Project →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">Education</h3>
              <p className="text-gray-600 mt-2">EV 2 & 3 Wheeler Specialist<br />Tata IIS Mumbai, 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">Skills</h3>
              <p className="text-gray-600 mt-2">
                🔋 EV Battery Systems, BMS Design, Power Electronics<br />
                🎛️ Arduino, ESP32, C++, IoT (MQTT, Blynk)<br />
                🛠️ PCB Design, Precision Soldering, Gadget Teardown
              </p>
            </div>
            <div className="text-center col-span-2">
              <a href="/resume.pdf" download className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">GitHub Stats</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://github-readme-stats.vercel.app/api?username=SamEVTech&show_icons=true&theme=radical&hide_border=true&title_color=1E3A8A&text_color=FFFFFF&bg_color=0D1117" alt="GitHub Stats" className="w-full md:w-1/2" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=SamEVTech&theme=radical&hide_border=true" alt="GitHub Streak" className="w-full md:w-1/3" />
          </div>
        </div>
      </section>

      <section id="lessons" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Lessons from the Lab</h2>
          <ul className="text-lg max-w-2xl mx-auto list-disc list-inside">
            <li>🔋 BMS is about safety first, then efficiency</li>
            <li>📡 ESP32’s WiFi is powerful but needs power management</li>
            <li>🔓 Teardowns reveal engineering secrets</li>
            <li>💡 Every prototype failure teaches a new trick</li>
            <li>🌿 Sustainable tech starts with small, practical solutions</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Connect with Me</h2>
          <div className="flex justify-center space-x-4">
            <a href="mailto:samirmulla2007@gmail.com">
              <img src="https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/sam-evtech-451520380">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com/_samir_m___">
              <img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>© 2025 SamEVTech. All Rights Reserved.</p>
      </footer>
    </div>
  );
    }
