import Image from "next/image";
import HeroSection from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import ScrollReveal from "./components/ScrollReveal";
import BrandVisible from "./components/BrandVisible";
import FlipCardSection from "./components/FlipCardSection";
import StatsSection from "./components/StatsSection";
import { ReactLenis } from 'lenis/react';
import HorizontalScroll from "./components/HorizontalScroll";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/linear-modal';
import { Plus, Paintbrush, Globe, MousePointer2, Layout } from 'lucide-react';

const preview = {
  galleryNew: { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" },
  globe: { src: "/globe.svg" },
  mousetrail: { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" },
  scrollReveal: { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" }
};

const items = [
  {
    id: 1,
    url: preview.galleryNew,
    title: "Graphic Design",
    icon: <Paintbrush className="w-20 h-20 text-white" />,
    description:
      "Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ",
    tags: ["Sunrise", "Mountains", "Golden", "Scenic", "Inspiring"],
  },
  {
    id: 2,
    url: preview.globe,
    title: "Globe Section",
    icon: <Globe className="w-20 h-20 text-white" />,
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ["Misty", "Path", "Mysterious", "Serene", "Rugged"],
  },
  {
    id: 3,
    url: preview.mousetrail,
    title: "Image Mouse Trail",
    icon: <MousePointer2 className="w-20 h-20 text-white" />,
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ["Pathway", "Adventure", "Peaks", "Challenging", "Breathtaking"],
  },
  {
    id: 4,
    url: preview.scrollReveal,
    title: "Scroll Reveal",
    icon: <Layout className="w-20 h-20 text-white" />,
    description: `Experience the magic of content discovery with our Scroll Reveal feature. As users navigate down the page, elements gracefully fade, slide, or zoom into view, creating a sense of depth and dynamism. This technique not only captures attention but also guides the user's focus through your narrative, ensuring key messages are seen at the perfect moment. Fully customizable animations allow you to match the reveal style to your brand's personality, from subtle and elegant to bold and energetic.`,
    tags: ["Reveal", "Animation", "Interactive", "Modern", "Engaging"],
  },
];

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <HeroSection/>
        
        <ScrollVelocity
          texts={['ABOUT . ABOUT . ABOUT . ABOUT .', 'ABOUT . ABOUT . ABOUT . ABOUT . ABOUT']} 
          velocity={100}
          className="custom-scroll-text"
        />
        <BrandVisible />
        <FlipCardSection />
        <StatsSection />
        <HorizontalScroll/>
        <ScrollVelocity
          texts={['SERVICES . SERVICES . SERVICES . SERVICES .', 'SERVICES . SERVICES . SERVICES . SERVICES . SERVICES']} 
          velocity={100}
          className="custom-scroll-text bg-[#1c1c1c]"
        />
      </div>
      <div className='bg-[#f3f1eb] py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto'>
          <div className='md:col-span-2 flex items-center justify-center p-8'>
             <h2 className='text-5xl md:text-7xl font-bold text-[#1c1c1c] uppercase tracking-tighter text-center leading-tight'>
                Know the tools<br/>win the game
             </h2>
          </div>
          {items.map((item, i) => {
            return (
              <Dialog
                key={item.id}
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.5,
                }}
              >
                <DialogTrigger
                  style={{
                    borderRadius: '0px',
                  }}
                  className='aspect-square flex w-full flex-col justify-between bg-[#1c1c1c] hover:bg-neutral-800 p-6 transition-colors'
                >
                  <div className="flex-1 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className='flex w-full flex-row items-end justify-between'>
                    <DialogTitle className='text-white text-xl font-medium'>
                      {item.title}
                    </DialogTitle>
                    <div className='text-white'>
                      <Plus className='w-6 h-6' />
                    </div>
                  </div>
                  {/* Hidden DialogImage to maintain transition logic if needed, or we can just rely on the content */}
                  <div className="hidden">
                    <DialogImage
                      // @ts-ignore
                      src={item.url?.src}
                      alt=''
                      className='h-0 w-0'
                    />
                  </div>
                </DialogTrigger>
                <DialogContainer className='pt-20' overlayClassName='dark:bg-[radial-gradient(125%_125%_at_50%_10%,#050505_40%,#1b1b1b_100%)] bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#b1b1b1_100%)]'>
                  <DialogContent
                    style={{
                      borderRadius: '24px',
                    }}
                    className=' relative flex h-full mx-auto flex-col overflow-y-auto border dark:bg-black bg-white hover:bg-neutral-50 dark:hover:bg-neutral-950 lg:w-[900px] w-[80%] '
                  >
                    <DialogImage
                      // @ts-ignore
                      src={item.url.src}
                      alt=''
                      className='h-full  object-contain w-[60%] mx-auto'
                    />
                    <div className='p-6'>
                      <DialogTitle className='text-5xl text-zinc-950 dark:text-zinc-50'>
                        {item.title}
                      </DialogTitle>

                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                      >
                        <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                          {item.description}
                        </p>
                      </DialogDescription>
                    </div>
                    <DialogClose className='text-zinc-50  dark:bg-neutral-900 bg-neutral-200 p-4 hover:bg-neutral-500 rounded-lg dark:hover:bg-neutral-800' />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            );
          })}
        </div>
      </div>
    </ReactLenis>
  );
}
