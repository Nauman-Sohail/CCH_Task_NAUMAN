import React from 'react';


const App = () => {
  return (
    <div>
  
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white fixed w-full top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="#" className="text-2xl font-bold">MySite</a>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

    
      <main>
     
        <section id="home" className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/background.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
            <div className="text-center px-6">
              <h1 className="text-6xl font-bold mb-6 leading-tight">Unlock the Future with AI</h1>
              <p className="text-xl mb-8">Harness the power of artificial intelligence to drive innovation and transform your business. Discover our cutting-edge solutions designed for tomorrow.</p>
              <a href="#services" className="bg-gradient-to-r from-teal-400 to-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:from-teal-500 hover:to-blue-700 transition-colors">Explore AI Solutions</a>
            </div>
          </div>
        </section>

      
        <section id="about" className="py-16 bg-gray-100 text-gray-900">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-5xl font-bold mb-6 text-gradient">About Us</h2>
            <p className="text-lg mb-8">At MySite, we are pioneers in artificial intelligence. Our mission is to deliver innovative AI solutions that empower businesses to reach new heights. With a team of experts and cutting-edge technology, we provide tailored solutions that address your unique challenges.</p>
            <p className="text-lg mb-8">Our AI services are designed to integrate seamlessly into your existing operations, enhancing efficiency, accuracy, and decision-making capabilities. From custom machine learning models to advanced natural language processing, we offer a comprehensive suite of tools to propel your business forward.</p>
            <a href="#contact" className="bg-gradient-to-r from-blue-400 to-teal-500 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:from-blue-500 hover:to-teal-600 transition-colors">Learn More</a>
          </div>
        </section>

       
        <section id="services" className="py-16 bg-white text-gray-900">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Our AI Services</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-gradient-to-r from-purple-200 to-blue-100 shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-3xl font-bold mb-4 text-purple-600">AI-Powered Analytics</h3>
                <p className="text-lg mb-4">Transform your data into valuable insights with our AI-powered analytics. Our solutions provide real-time analysis, predictive insights, and actionable recommendations to drive business strategy.</p>
                <p className="text-sm text-gray-600">Key Features:</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                  <li>Real-time data processing</li>
                  <li>Predictive modeling</li>
                  <li>Custom dashboards and reports</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-teal-200 to-blue-100 shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-3xl font-bold mb-4 text-teal-600">Natural Language Processing (NLP)</h3>
                <p className="text-lg mb-4">Enhance user engagement with our NLP solutions. We offer advanced chatbots, sentiment analysis, and language translation to improve customer interactions and streamline communication.</p>
                <p className="text-sm text-gray-600">Key Features:</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                  <li>Intelligent chatbots</li>
                  <li>Sentiment and emotion analysis</li>
                  <li>Multilingual support</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-200 to-purple-100 shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-3xl font-bold mb-4 text-blue-600">Machine Learning Models</h3>
                <p className="text-lg mb-4">Develop customized machine learning models to solve complex problems and enhance operational efficiency. Our models are designed to adapt and scale with your business needs.</p>
                <p className="text-sm text-gray-600">Key Features:</p>
                <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                  <li>Custom model development</li>
                  <li>Performance optimization</li>
                  <li>Integration with existing systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

   
        <section id="how-it-works" className="py-16 bg-gray-100 text-gray-900">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-5xl font-bold mb-6 text-gradient">How It Works</h2>
            <p className="text-lg mb-8">We follow a streamlined process to deliver the best AI solutions tailored to your needs. Here’s a step-by-step overview of how we work:</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">1. Discovery</h3>
                <p className="text-lg mb-4">We start with a thorough analysis of your business needs and objectives. This involves understanding your challenges, goals, and the data available.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">2. Design & Planning</h3>
                <p className="text-lg mb-4">Our team designs a customized AI solution tailored to your specific needs. We plan the project phases, including milestones, timelines, and resource allocation.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">3. Implementation</h3>
                <p className="text-lg mb-4">We develop and integrate the AI solution into your existing systems. This includes model training, system integration, and testing to ensure everything runs smoothly.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">4. Support & Optimization</h3>
                <p className="text-lg mb-4">After deployment, we provide ongoing support and optimization to ensure the AI solution continues to meet your needs. We offer regular updates and performance evaluations.</p>
              </div>
            </div>
          </div>
        </section>

      
        <section id="contact" className="py-16 bg-white text-gray-900">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Contact Us</h2>
            <p className="text-lg mb-8">Were here to answer your questions and help you explore how AI can benefit your business. Get in touch with us today to start your AI journey.</p>
            <p className="text-lg mb-8">You can reach us through email, phone, or visit our office. We are always ready to assist you with your AI needs and provide the best solutions tailored to your requirements.</p>
            <a href="mailto:naumanshoail37@gmail.com" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-colors">Email Us</a>
            <p className="mt-4 text-lg">Phone: <a href="tel:+923234588502" className="text-teal-500 hover:underline">03234588502</a></p>
          </div>
        </section>
      </main>

     
      <footer className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MySite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;