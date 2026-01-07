'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CMTech Logo"
              width={120}
              height={54}
              priority
              className="h-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-700 transition-colors">
              Courses
            </Link>
            <Link href="/give" className="text-gray-700 hover:text-blue-700 transition-colors">
              Get Involved
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Donate Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
            Learners to Earners
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6">
            Prison education built from the inside, out
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            CMTech works because the people closest to the problem are closest to the solution.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Skills. Real Careers. Real Dignity.
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Cade Moore Polytechnic Institute was founded on a simple belief: <strong>incarcerated people deserve access to the same quality career education as everyone else.</strong> Not watered-down programs. Not busywork. Real skills that lead to real, attainable careers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our leadership team is 100% justice-impacted. We sat in those classrooms. We've experienced what works and what doesn't. That lived experience shapes everything we build—from our curriculum design to our peer-led learning circles.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, CMTech serves career-based courses to learners across 1,300+ facilities through two channels: <strong>digital courses delivered via Edovo tablets</strong> and <strong>peer-led CMTech Charters</strong> — learning circles facilitated by incarcerated leaders who have completed our training.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <p className="text-lg text-gray-800 font-semibold mb-2">
                  Our program isn't rehabilitative.
                </p>
                <p className="text-gray-700">
                  We believe that rehabilitation and desistance from crime is only possible through opportunity — so we focus on that.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our program identifies industries known to hire second chance workers, and introduces these opportunities to incarcerated learners. Our learners can identify which one works best for them, and begin developing the prerequisite skills these industries find desirable.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                What people do with that opportunity is up to them — and time after time, we find that our learners exceed every expectation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/give/donate" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                Support Our Mission
              </Link>
              <Link href="/courses" className="bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-center">
                Explore Our Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prison Pedagogy */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Vision & Pedagogy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learning That Actually Works
              </h2>
              <p className="text-xl text-gray-700">
                Narrative-driven education designed for justice-impacted adults interested in the skilled trades.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Most prison education treats incarcerated people like they need fixing. We treat them like the capable adults they are. Our prison pedagogy, or teaching framework, was developed specifically for adult learners in correctional settings.
              </p>

              {/* Pedagogy Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-3">📖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Story-First Instruction</h3>
                  <p className="text-gray-700">
                    Every concept is anchored in narrative. We don't start with theory — we start with scenarios learners recognize. A broken AC unit. A wiring problem in a kitchen. A customer dispute. From there, we build technical knowledge that connects to real situations.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Peer-Led Learning</h3>
                  <p className="text-gray-700">
                    CMTech Charters put incarcerated leaders at the front of the movement. Peer facilitators complete intensive training and guide study groups through our curriculum, while learners access course content through secure tablets.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-3">🚪</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reentry-Centered Design</h3>
                  <p className="text-gray-700">
                    Every lesson is built with release day in mind. We address the real barriers learners will face: occupational licensing restrictions, employer hesitation, navigating background checks, building professional networks from scratch.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Career-Connected Content</h3>
                  <p className="text-gray-700">
                    We don't teach skills in isolation. Every course connects technical knowledge to career paths, industry expectations, and real workplace scenarios. Learners learn how to wire an outlet while they learn what it's like to work for a contractor.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Dual Delivery Model</h3>
                <p className="text-lg opacity-90">
                  CMTech reaches learners through two complementary channels: <strong>digital courses delivered via Edovo tablets</strong> (available in 1,300+ facilities) and <strong>peer-led CMTech Charters</strong> (in-person learning circles). Some facilities offer both; others start with one and expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 100% Justice-Impacted Leadership */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Meet the Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Led by People Who've Been There
              </h2>
              <p className="text-xl text-gray-700">
                100% justice-impacted leadership. Access to reentry wisdom and insight before leaving the gates.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every member of CMTech's leadership team has direct lived experience with either incarceration or the justice system. We're not consultants or professors observing from the outside. Most of us have sat in those cells and attended those programs. The rest of us have checked the box and never heard back.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                All of us know what helps and what doesn't because we've made it through to the other end. All of us are skilled professionals doing our best to lighten the load for the next generation of reentrants.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 italic">
                  That proximity shapes everything: how we design courses, how we train peer leaders, how we communicate with learners. <strong>When we say we understand, we mean it.</strong>
                </p>
              </div>

              {/* Team Member Card - Nolan Adams */}
              <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-5xl">👨‍🏫</span>
                      </div>
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-1">Nolan Adams</h3>
                        <p className="text-blue-100">Chief Academic Officer</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Justice-Impacted Leader
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nolan Adams is Chief Academic Officer of The Cade Moore Polytechnic Institute (CMTech), a prison education nonprofit built by and for incarcerated people. He brings a decade of professional expertise and his own lived experience with the justice system to transforming correctional education.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      At CMTech, Nolan spearheads strategic vision and pedagogical innovation for pre-apprenticeship career training programs. His narrative-driven, dignity-affirming approach achieves an <strong className="text-blue-700">85% pass rate</strong> with incarcerated learners—a population routinely dismissed as "disengaged" from education.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nolan's approach to correctional education emphasizes professional confidence and competence as counterweights to the crushing stigma of reentry. His work centers a fundamental belief: <strong>when society tells justice-impacted individuals "no," education should empower them to create their own opportunities.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reaching Learners Nationwide
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              1,300+ facilities. 210,000+ learners. One mission.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CMTech operates in over 1,300 county, state, and federal prisons, community corrections centers, and a number of Immigration Customs and Enforcement facilities across the country.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our partnership with <strong>Edovo</strong>, learners can access our courses on secure tablets. Through <strong>CMTech Charters</strong>, peer leaders facilitate in-person study groups.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,300+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Partner Facilities
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">210,000+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Learners Served
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-amber-600 mb-2">50 States</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  National Reach
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Bring CMTech to Your Facility
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            <strong>The Cade Moore Polytechnic Institute (CMTech)</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            info@CadeMoorePolytechnic.Institute | PO Box #810570, Dallas, TX 75381
          </p>
          <p className="text-xs text-gray-400 mt-4">
            © 2026 CMTech. Real Skills for the Real World. 🎯
          </p>
        </div>
      </footer>
    </div>
  );
}
