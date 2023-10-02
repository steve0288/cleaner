// 'housekeeping' | 'window-cleaning' | 'grout-cleaning' | 'commercial-cleaning' | 'wall-cleaning' | 'oven-cleaning'
export interface CleaningService {
  Category: string;
  Subtitle: string;
  TaskDescription: string;
  Price: number;
  MinimumNotes: string;
}

export const cleaningServices: CleaningService[] = [
  {
    Category: 'Housekeeping',
    Subtitle: 'Service',
    TaskDescription: 'Weekly Cleaning',
    Price: 45,
    MinimumNotes: 'Regular cleaning: $115 for 2 hours. Catch-up cleaning: $130 for 2 hours.'
  },
  {
    Category: 'Housekeeping',
    Subtitle: 'Service',
    TaskDescription: 'Fortnightly Cleaning',
    Price: 48,
    MinimumNotes: 'Regular cleaning: $115 for 2 hours. Catch-up cleaning: $130 for 2 hours.'
  },
  {
    Category: 'Housekeeping',
    Subtitle: 'Service',
    TaskDescription: 'Catch Up Cleaning',
    Price: 48,
    MinimumNotes: 'Regular cleaning: $115 for 2 hours. Catch-up cleaning: $130 for 2 hours.'
  },
  {
    Category: 'Bathroom Cleaning',
    Subtitle: 'Service',
    TaskDescription: 'Bathroom Cleaning',
    Price: 65,
    MinimumNotes: 'Minimum fee: 150'
  },
  {
    Category: 'Window Cleaning',
    Subtitle: 'Window Cleaning',
    TaskDescription: 'Standard Glass',
    Price: 12,
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Window Cleaning',
    Subtitle: 'Window Cleaning',
    TaskDescription: 'Double Glass',
    Price: 18,
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Window Cleaning',
    Subtitle: 'Window Cleaning',
    TaskDescription: 'Large Glass',
    Price: 24,
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Window Cleaning',
    Subtitle: 'Window Cleaning',
    TaskDescription: 'Single Door',
    Price: 18,
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Window Cleaning',
    Subtitle: 'Window Cleaning',
    TaskDescription: 'Double Door',
    Price: 35,
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Wall Cleaning',
    Subtitle: 'Service',
    TaskDescription: 'Inside house Walls',
    Price: 0, // Set as 0 since it's "Contact Us for a Quote"
    MinimumNotes: 'Minimum fee: 130'
  },
  {
    Category: 'Commercial Cleaning',
    Subtitle: 'Service',
    TaskDescription: 'Disinfection, kitchen and breakroom cleaning, dusting and wiping services and general office cleaning.',
    Price: 0, // Set as 0 since it's "Call us for a Quote"
    MinimumNotes: 'Call us for a Quote'
  }
]
