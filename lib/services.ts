import {
  Package,
  Footprints,
  ShoppingCart,
  Landmark,
  Users,
  HeartHandshake,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { whatsappLink } from "./whatsapp";

export type Service = {
  name: string;
  description: string;
  price: string; // display string, e.g. "₪150" or "from ₪200/hr" or "quoted"
};

export type ServiceCategory = {
  id: string; // slug, e.g. "home-and-deliveries"
  icon: LucideIcon;
  title: string;
  services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "home-and-deliveries",
    icon: Package,
    title: "Home & Deliveries",
    services: [
      {
        name: "Wait for a delivery",
        price: "₪150",
        description:
          "We wait at your home for a courier or delivery, up to 2 hours.",
      },
      {
        name: "Wait for a technician",
        price: "₪200 (first 2 hrs) + ₪80/hr",
        description:
          "Electrician, plumber, AC, handyman. We wait and give access so you don't lose the day.",
      },
      {
        name: "Supervise a contractor visit",
        price: "from ₪200/hr",
        description:
          "We oversee a contractor visit or collect quotes on your behalf.",
      },
      {
        name: "Internet / cable installation wait",
        price: "₪200 (first 2 hrs) + ₪80/hr",
        description:
          "Bezeq, Hot, or Cellcom install — we handle the wait and the access.",
      },
    ],
  },
  {
    id: "errands-and-pickups",
    icon: Footprints,
    title: "Errands & Pickups",
    services: [
      {
        name: "Pharmacy run",
        price: "₪80",
        description:
          "Prescription pickup from Clalit, Maccabi, or Meuhedet.",
      },
      {
        name: "Post office",
        price: "₪90",
        description:
          "Collection or sending at the post office. No queue for you.",
      },
      {
        name: "Pickup-point collection",
        price: "₪90",
        description:
          "Yango, Amazon locker, BoxIt — collected and brought to you.",
      },
      {
        name: "Returns & exchanges",
        price: "₪100",
        description:
          "In-store returns and exchanges handled on your behalf.",
      },
      {
        name: "Dry cleaning",
        price: "₪80",
        description: "Drop-off or pickup at the dry cleaner.",
      },
      {
        name: "Optician / shoe repair / tailor",
        price: "₪80",
        description:
          "Drop or collect at the optician, cobbler, or tailor.",
      },
      {
        name: "Specific-item hunt",
        price: "from ₪200/hr",
        description:
          "Tell us the exact thing — we'll track it down and get it.",
      },
    ],
  },
  {
    id: "shopping",
    icon: ShoppingCart,
    title: "Shopping",
    services: [
      {
        name: "Grocery shop",
        price: "₪200",
        description:
          "Your list, your stores, up to 90 minutes of shopping.",
      },
      {
        name: "Pre-Shabbat run",
        price: "₪220",
        description:
          "Multiple stops to a specific list, ready before Shabbat.",
      },
      {
        name: "Hardware store run",
        price: "₪150",
        description:
          "Ace, Home Center, or local — we fetch what you need.",
      },
      {
        name: "Gift purchase + wrap",
        price: "₪180 + cost of gift",
        description: "We buy (or collect) and gift-wrap.",
      },
      {
        name: "Pet supplies",
        price: "₪120",
        description: "Food, litter, and supplies from your pet shop.",
      },
    ],
  },
  {
    id: "government-and-queues",
    icon: Landmark,
    title: "Government & Queues",
    services: [
      {
        name: "Misrad Hapnim",
        price: "₪250/hr",
        description:
          "Teudat zehut, passports — we stand the queue and submit.",
      },
      {
        name: "Misrad Harishui",
        price: "₪250/hr",
        description:
          "Licence and car-registration errands, queue included.",
      },
      {
        name: "Notary accompaniment",
        price: "₪250/hr",
        description: "We accompany or queue at the notary's office.",
      },
      {
        name: "Embassy visits",
        price: "₪250/hr",
        description:
          "US, UK, SA consular errands and document drop-offs.",
      },
    ],
  },
  {
    id: "family-logistics",
    icon: Users,
    title: "Family Logistics",
    services: [
      {
        name: "School pickup + take home",
        price: "₪90",
        description: "Collected from school and brought safely home.",
      },
      {
        name: "חוגים pickup or drop-off",
        price: "₪90",
        description: "To or from after-school activities, on schedule.",
      },
      {
        name: "Doctor / dentist accompaniment",
        price: "from ₪200/hr",
        description:
          "We accompany your child to and from appointments.",
      },
      {
        name: "Birthday party gift run",
        price: "₪180 + cost of gift",
        description: "Bought and wrapped, ready for the party.",
      },
      {
        name: "Pre-school-year supplies",
        price: "from ₪200/hr",
        description: "The full back-to-school shopping list, sorted.",
      },
      {
        name: "Babysitting bridge",
        price: "₪120/hr",
        description:
          "Covering 2–3 hours between handovers when plans gap.",
      },
    ],
  },
  {
    id: "parents-and-elder-care",
    icon: HeartHandshake,
    title: "Parents & Elder Care",
    services: [
      {
        name: "Pharmacy run for parents",
        price: "₪80",
        description:
          "Prescriptions collected and delivered to your parents.",
      },
      {
        name: "Accompany parent to doctor or hospital",
        price: "from ₪200/hr",
        description:
          "Company and help getting to and from medical visits.",
      },
      {
        name: "Grocery run to parents' home",
        price: "₪200",
        description: "Their shopping, delivered and put away.",
      },
      {
        name: "Coordinate tradespeople at their home",
        price: "from ₪200/hr",
        description:
          "We manage repairs and visits at your parents' home.",
      },
    ],
  },
  {
    id: "travel-and-hosting",
    icon: Plane,
    title: "Travel & Hosting",
    services: [
      {
        name: "Pre-arrival home prep",
        price: "₪300",
        description:
          "AC on, fresh groceries, flowers — home ready when you land.",
      },
      {
        name: "Pre-guest hosting prep",
        price: "₪220",
        description:
          "Groceries, flowers, fresh towels, fridge stocked for guests.",
      },
      {
        name: "Mid-travel home check",
        price: "₪120/visit",
        description:
          "While you're away, we check the home: security, post, all well.",
      },
      {
        name: "Plant watering + mail collection",
        price: "quoted",
        description:
          "Extended-trip care: plants watered, mail collected, home kept alive.",
      },
    ],
  },
];

export function serviceBookingLink(service: Service): string {
  return whatsappLink(
    `Hi Merle, I'd like to book: ${service.name} (${service.price}).`,
  );
}
