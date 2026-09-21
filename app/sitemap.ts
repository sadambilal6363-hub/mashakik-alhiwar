import type { MetadataRoute } from 'next';
import { origin,launched } from '../lib/site';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return launched?['/','/menu/','/about/','/contact/'].map(path=>({url:origin+path})):[];}
