import type { MetadataRoute } from 'next';
import { origin,launched } from '../lib/site';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(launched?{allow:'/'}:{disallow:'/'})},...(launched?{sitemap:origin+'/sitemap.xml'}:{})};}
