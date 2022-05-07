import pandas as pd
import sys

fishSpecies = sys.argv[1] #to get user input fish name

def  fishSpeciespredictions( fishSpecies ):

    df = pd.read_csv(f'final.csv')

    df['Date'] = pd.to_datetime(df['Date'])

    df.set_index('Date')
    
    #  filtering the row 'fish' where fishSpecies name = user enterd data

    dfS = df[df['fish'].str.contains(fishSpecies)]
    output = dfS.to_json()
    print(output)
    sys.stdout.flush()
fishSpeciespredictions( fishSpecies )
