from bs4 import BeautifulSoup
import requests
import pandas as pd
website = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results'
response = requests.get(website)
#print(response)
soup = BeautifulSoup(response.content,'html.parser')
print(soup)
match_result = soup.findAll('div',{'class':'col-md-8 col-16'})
#match_result
url_part_1 = 'https://www.espncricinfo.com/'
url_part_2 = []
for item in match_result:
    for link in item.find_all('a',{'class':'rel'}):
        url_part_2.append(link.get('href'))
print(response)