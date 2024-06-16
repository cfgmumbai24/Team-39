import openai

openai.api_key=""
def get_response(input):
    response = openai.Completion.create(
  model="text-davinci-003",
  prompt="write a tagline"
    )  
    return response

if __name__=="__main__":
    print("hi")
    user_input= input("User:")
    response= get_response(user_input)
    print(response)