import requests
from bs4 import BeautifulSoup

filename = "./python-leadershipteam.csv"

# get the mail-chimp about page
about_page = BeautifulSoup(requests.get('https://mailchimp.com/about/').content, "html.parser")

# find the leadership team
leadership_team = about_page.find_all('a', class_="bio_link")

# open file for writing
csv = open(filename, 'w')

# loop through the members of the leadership team
for x in range(len(leadership_team)):
  title = leadership_team[x]['data-title']
  position = leadership_team[x]['data-position']
  description = leadership_team[x]['data-description']

  # write to the file
  csv.write(title + ',' + position + ',' + description + '\n')

# close the file
csv.close()
