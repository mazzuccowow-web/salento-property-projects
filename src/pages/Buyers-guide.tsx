/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, X, Loader2 } from 'lucide-react';

interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

// ⚠️ Cambia questa URL inserendo l'indirizzo del WordPress di appoggio che configurerai
const WORDPRESS_URL = 'https://blog.salentopropertyprojects.co.uk';

export default function BuyersGuide() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recuperiamo gli articoli da WordPress includendo le immagini (_embed)
    fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`)
      .then((res) => {
        if (!res.ok) throw new Error('Error loading guides');
        return res.json();
      })
      .then((data: WPPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Formatta la data in inglese (en-US)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen" id="buyers-guide-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <header className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            Buyers Guide
          </motion.h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-brand-taupe font-light max-w-2xl mx-auto">
            Guides, news and expert advice for purchasing and renovating property in Salento.
          </p>
        </header>

        {/* LOADING INDICATOR */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
            <p className="text-brand-taupe font-light">Loading guides...</p>
          </div>
        ) : (
          /* ARTICLES GRID */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1000'; // Fallback
              
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-white rounded-xl shadow-lg overflow-hidden border border-brand-sand flex flex-col h-full"
                >
                  {/* FEATURED IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
                    </div>

                    <h3 
                      className="text-xl font-serif text-brand-black mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div 
                      className="text-brand-taupe font-light text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-brand-black font-semibold tracking-wider text-xs uppercase hover:text-brand-gold transition-colors flex items-center space-x-2 mt-auto"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* MODAL DETTAGLIO ARTICOLO */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-brand-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative p-6 md:p-10 border border-brand-sand"
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-brand-beige hover:bg-brand-sand text-brand-black p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* MODAL CONTENT */}
                <article className="space-y-6">
                  <div className="flex items-center space-x-2 text-brand-gold text-xs font-semibold uppercase">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.date)}</span>
                  </div>

                  <h1 
                    className="text-3xl md:text-5xl font-serif text-brand-black leading-tight"
                    dangerouslySetInnerHTML={{ __html: selectedPost.title.rendered }}
                  />

                  {/* IMMAGINE IN EVIDENZA NEL POPUP */}
                  {selectedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="h-64 md:h-96 w-full overflow-hidden rounded-xl">
                      <img
                        src={selectedPost._embedded['wp:featuredmedia'][0].source_url}
                        alt={selectedPost.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* CONTENUTO HTML DELL'ARTICOLO */}
                  <div 
                    className="prose prose-stone max-w-none text-brand-taupe font-light leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
                  />
                </article>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
