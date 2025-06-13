import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaGlobe,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const teamMembers = [
  {
    name: 'Ali Nawaz',
    role: 'Owner',
    image: 'https://i.ibb.co/mFh4GHVJ/Ali-nawaz.png',
    bio: ': Nawaz is the founder of our agency with over 10 years of digital experience.',
    socials: {
      facebook: 'https://facebook.com/alinawaz',
      twitter: 'https://twitter.com/alinawaz',
      linkedin: 'https://linkedin.com/in/alinawaz',
      instagram: 'https://instagram.com/alinawaz',
    },
  },
  {
    name: 'M Akter',
    role: 'Co-Founder',
    image: 'https://i.ibb.co/jZ5s9WP3/M-Akter.jpg',
    bio: 'Co-founder with strong UI/UX and business strategy experience.',
    socials: {
      dribbble: 'https://dribbble.com/makter',
      twitter: 'https://twitter.com/makter',
      linkedin: 'https://linkedin.com/in/makter',
      instagram: 'https://instagram.com/makter',
    },
  },
  {
    name: 'Junayed',
    role: 'Managing Assistant',
    image: 'https://i.ibb.co/nh1W2fn/junayedhub.png ',
    bio: 'Manages projects and assists team coordination with efficiency.',
    socials: {
      dribbble: 'https://dribbble.com/junayed',
      twitter: 'https://twitter.com/junayed',
      linkedin: 'https://linkedin.com/in/junayed',
      instagram: 'https://instagram.com/junayed',
    },
  },
  {
    name: 'A Akbor',
    role: 'Digital Marketing Expert',
    image: 'https://i.ibb.co/zVYR7DKz/Ali-Akbor-profile-image.jpg',
    bio: 'Expert in SEO, SEM, and SMM campaigns.',
    socials: {},
  },
  {
    name: 'Anwarul Haque',
    role: 'Digital Marketing Expert',
    image: 'https://i.ibb.co/BVpwmYND/anwarshub.jpg',
    bio: 'Content strategist and paid ad specialist.',
    socials: {},
  },
  {
    name: 'Moynul Islam',
    role: 'Digital Marketing Expert',
    image: 'https://i.ibb.co/ZRhc7htx/moynul-islam.jpg',
    bio: 'Handles influencer marketing and analytics.',
    socials: {},
  },
];

const iconMap = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  dribbble: FaDribbble,
  website: FaGlobe,
};

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className='py-20 px-4 sm:px-8 lg:px-20 bg-base-100 text-base-content'>
      <div className='text-center mb-14'>
        <h2 className='text-5xl font-bold text-primary mb-4'>Meet Our Team</h2>
        <p className='text-lg text-gray-500 dark:text-gray-300'>
          The creative minds behind our success
        </p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className='bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-800 text-center group transition-all cursor-pointer'
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.image}
              alt={member.name}
              className='w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary object-cover shadow-md'
            />
            <h4 className='text-xl font-semibold mb-1 group-hover:text-primary transition'>
              {member.name}
            </h4>
            <p className='text-sm text-gray-500 mb-4 dark:text-gray-400'>{member.role}</p>
            <div className='flex justify-center gap-4 text-primary'>
              {Object.entries(member.socials).map(([key, link], i) => {
                const IconComponent = iconMap[key];
                return (
                  <a
                    key={i}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xl hover:text-accent transition-transform hover:scale-125'
                    onClick={(e) => e.stopPropagation()} // Prevent modal on icon click
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <Dialog open={true} onClose={() => setSelectedMember(null)} className='relative z-50'>
          <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
          <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Dialog.Panel className='max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl'>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className='w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary object-cover'
              />
              <Dialog.Title className='text-2xl font-bold text-center mb-2'>
                {selectedMember.name}
              </Dialog.Title>
              <p className='text-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                {selectedMember.role}
              </p>
              <p className='text-gray-700 dark:text-gray-200 text-center mb-4'>
                {selectedMember.bio}
              </p>
              <div className='flex justify-center gap-3'>
                {Object.entries(selectedMember.socials).map(([key, link], i) => {
                  const IconComponent = iconMap[key];
                  return (
                    <a
                      key={i}
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xl text-primary hover:text-accent'
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
              <div className='text-center mt-6'>
                <button className='btn btn-sm btn-primary' onClick={() => setSelectedMember(null)}>
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default OurTeam;
// This code defines a React component that displays a team section with member profiles.
// Each member has a name, role, image, bio, and social media links.
