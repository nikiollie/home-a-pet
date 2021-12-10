import pymongo
from petpy import Petfinder
import schedule 
import time 

client = pymongo.MongoClient("mongodb+srv://karthik:g9SgKP5CgQAC3j*@homeapet.kwmu5.mongodb.net/HomeAPet?retryWrites=true&w=majority")
db = client.petInfo
collection = db['petDetails']

key = "xcw7hyqnIdFvmBl64glmNV0RAuElo539kehszeevPP8FyaFoB8", 
secret = "W05eTY6J1aD0DwT8NmU8PgrzXhevYS0IlZfuS8Cg"
pf = Petfinder(key=key, secret=secret)

def get_and_store_animals():
    cats = pf.animals(animal_type='cat', gender='female', status='adoptable', location='Seattle, WA', distance=10, pages=None, return_df=True).fillna('')
    cats = cats.to_dict('records')
    print(cats)
    collection.insert_many(cats)

get_and_store_animals()

# while True:
#     t= time.time()
#     get_and_store_animals()
#     t= time.time()-t
#     time.sleep(300-t)