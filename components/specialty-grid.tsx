"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export const specialties = [
  { 
    name: "Nőgyógyászat",
    slug: "nogyogyaszat",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop"
  },
  { 
    name: "Belgyógyászat",
    slug: "belgyogyaszat",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop"
  },
  { 
    name: "Fül-orr-gégészet",
    slug: "ful-orr-gegeszet",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
  },
  { 
    name: "Pszichológia",
    slug: "pszichologia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
  },
  { 
    name: "Fogászat",
    slug: "fogaszat",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
  },
  { 
    name: "Ultrahang",
    slug: "ultrahang",
    image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?w=400&h=300&fit=crop"
  },
  { 
    name: "Érsebészet",
    slug: "ersebeszet",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=300&fit=crop"
  },
  { 
    name: "Urológia",
    slug: "urologia",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=300&fit=crop"
  },
  { 
    name: "Endokrinológia",
    slug: "endokrinologia",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop"
  },
  { 
    name: "Kardiológia",
    slug: "kardiologia",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&h=300&fit=crop"
  },
  { 
    name: "Szemészet",
    slug: "szemeszet",
    image: "https://images.unsplash.com/photo-1580281657702-257584239a42?w=400&h=300&fit=crop"
  },
  { 
    name: "Ortopédia",
    slug: "ortopedia",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop"
  }
];

export function SpecialtyGrid() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {specialties.map((specialty) => (
        <div
          key={specialty.name}
          className="relative group cursor-pointer overflow-hidden rounded-lg"
          onClick={() => router.push(`/specialty/${specialty.slug}`)}
        >
          <div className="relative h-48">
            <Image
              src={specialty.image}
              alt={specialty.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
              {specialty.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}