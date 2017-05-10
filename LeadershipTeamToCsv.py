import requests
import BeautifulSoup

# get the mail-chimp about page
about_page = requests.get('https://mailchimp.com/about/')

# find the leadership team
print(about_page.content)