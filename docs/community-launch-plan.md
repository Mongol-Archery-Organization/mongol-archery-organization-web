# Community pages: launch decisions

The new pages preserve the existing blue, gold, and cream palette and support English and Mongolian. Routes: `/about/#sponsors`, `/donate/`, `/about/#gallery`, `/about/#founders-and-board`, and `/about/#how-to-join`.

## Content to supply

- Founders and board: four supplied portraits and bilingual roles are in place. Nicholas MacRitchie Freer and Otgonjargal Dorj appear as founders; Badamsukh Yadamsuren and Myagmarsuren Otgonjargal appear as board members. Nicholas’s board role is also listed on his founder card. Biographies can be added later.
- Sponsors: Numon Design Build and Royal Kitchen logos are in place. Royal Kitchen’s supplied image contains visible Design.com watermarks; replace it with a clean approved asset when available. Website links and descriptions can be added later.
- Membership: $25 USD annually; event participation without fees during membership, certificates for active members, and discounts on equipment sold by the organization. Before checkout launches, decide calendar year versus 12 months from payment, renewal policy, what qualifies as active membership, and equipment discount amounts.
- Donations: approved giving description and organization-owned payment account. Current page accepts no payment or personal data and makes no tax-deductibility claim.

## Recommended payment approach

Start with Stripe-hosted Payment Links: a fixed $25 annual membership payment and a separate donor-chosen one-time donation link. Link the organization's bank account to the payment provider for payouts. Start membership renewal manually unless the group explicitly chooses automatic annual renewal and its cancellation terms. Keep membership purchases distinct from donations in payment records and reports.

Stripe supports hosted links for products, subscriptions, and donations. See https://stripe.com/payments/payment-links and https://support.stripe.com/questions/how-to-accept-donations-through-stripe?locale=en-US (reviewed October 28, 2026).

PayPal is a reasonable alternative if it better matches the community's habits. A PayPal Business account can support donations; confirmed charities can also establish a Venmo charity profile. Eligibility must be confirmed before offering that option. Use organization-owned accounts. See https://www.paypal.com/us/cshelp/article/how-do-i-accept-donations-with-paypal-help200 and https://help.venmo.com/cs/articles/venmo-charity-profile-setup-guide-vhel366.

Before launch: verify provider eligibility, current transaction fees, payout account, receipts, and refund handling. Collect member name and email through hosted checkout and maintain a membership roster with payment reference, paid date, and expiry. Confirm payments in the provider dashboard; a return URL alone is not proof of payment. The site is statically exported, so hosted checkout fits without introducing a payment backend. Automated member activation later requires a trusted webhook/backend.

## Gallery content

Naadam 2026 now includes 12 curated photos selected from the 30 supplied images, with bilingual captions and a cover image. The album expands within About Us, and photos open in a native dialog with previous/next controls, arrow keys, Escape dismissal, focus restoration, and touch swipe navigation. WebP thumbnails and larger images are generated separately; originals in Downloads remain untouched.

The Facebook video is linked via “Watch on Facebook.” The shared URL could not be verified for embedding, so no embedded player was added. Naadam 2025 remains a coming-soon album.

Future major events should have their own album, arranged newest first. Keep selections concise, include descriptive captions, and add year filtering when the collection grows. Photo captions and dimensions for 2026 are in `src/lib/naadam-2026.ts`; images are in `public/images/gallery/naadam-2026/`.
