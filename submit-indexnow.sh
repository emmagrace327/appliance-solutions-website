#!/bin/bash
# Submit all URLs to IndexNow for fast indexing on Bing, Yandex, and others
# Run this after deploying to Cloudflare Pages

DOMAIN="https://www.applinacerepairnearme.us"
KEY="appliance-solutions-inc-indexnow-2026"

# Build URL list from sitemap
URLS=$(grep -oP '(?<=<loc>).*?(?=</loc>)' sitemap.xml)

echo "Submitting $(echo "$URLS" | wc -l) URLs to IndexNow..."

curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"www.applinacerepairnearme.us\",
    \"key\": \"$KEY\",
    \"urlList\": [
$(echo "$URLS" | sed 's/^/      \"/;s/$/\",/' | sed '$ s/,$//')
    ]
  }"

echo ""
echo "Done! URLs submitted to Bing, Yandex, Seznam, and Yep via IndexNow."
echo "For Google, submit your sitemap at: https://search.google.com/search-console"
