import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs

def scrape_image(string):
    search_query = string
    search_url = f"https://www.google.com/search?q={search_query}"

    response = requests.get(search_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    first_image_link = None
    for a in soup.find_all('a', href=True):
        if a['href'].startswith('/imgres'):
            parsed_url = urlparse(a['href'])
            query_params = parse_qs(parsed_url.query)
            if 'imgurl' in query_params:
                first_image_link = query_params['imgurl'][0]
                break

    if first_image_link:
        response = requests.get(first_image_link)
        return response
    