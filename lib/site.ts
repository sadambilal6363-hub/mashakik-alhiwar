import restaurant from '../data/restaurant.json';
import items from '../data/menu.json';
export { restaurant, items };
export const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://mashakik-alhiwar.sadammhr961.chatgpt.site';
export const launched = process.env.LAUNCH_MODE === 'true';
export const categories = [{id:'grill',name:'على الجمر',en:'FROM THE GRILL',image:'lamb'},{id:'sandwiches',name:'برجر وسندويشات',en:'BURGERS & SANDWICHES',image:'burger'},{id:'sides',name:'على جنب',en:'SIDES',image:'corn'},{id:'drinks',name:'شي يبرّد',en:'DRINKS',image:'hibiscus'}];
export const directions = 'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(restaurant.plusCode);
export const mapEmbed = 'https://www.google.com/maps?q='+encodeURIComponent(restaurant.plusCode)+'&output=embed';
export function orderLink(dish?:string) { return restaurant.whatsappVerified ? 'https://wa.me/'+restaurant.phone.replace('+','')+'?text='+encodeURIComponent('السلام عليكم، أريد الطلب من مشاكيك الحوار'+(dish?' — '+dish:'')) : 'tel:'+restaurant.phone; }
export const orderLabel=restaurant.whatsappVerified?'اطلب عبر واتساب':'اتصل للطلب';
export type MenuItem=(typeof items)[number];
