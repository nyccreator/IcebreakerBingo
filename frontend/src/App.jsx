import { useEffect } from 'react'
import './App.css'
import BingoForm from './components/BingoForm'

function App() {
  // Test call to api/bingocards endpoint
  // TODO: Remove this code in final product
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/bingocards/')
      const json = await response.json()
      console.log(json)
    }
    fetchData()
  }, []);

  (async () => {
    const rawResponse = await fetch('/api/bingocards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contents": [
          [
            "Speaks multiple languages",
            "Can't swim",
            "Sleeps with a stuffed animal",
            "Has built an app",
            "Is afraid of clowns"
          ],
          [
            "Has been skydiving",
            "Favorite sport is basketball",
            "Favorite food is pizza",
            "Prefers remote work",
            "Has played a sport in college"
          ],
          [
            "Does yoga",
            "Goes to Georgia Tech",
            "Moved in the last year",
            "Has studied abroad",
            "Has climbed a mountain"
          ],
          [
            "Has participated in a hackathon",
            "Has skipped a grade",
            "Has been on a cruise",
            "Likes pineapple on pizza",
            "Favorite color is purple"
          ],
          [
            "Has a younger brother",
            "Has built a website",
            "Favorite subject is math",
            "Has a pet",
            "Reads comics"
          ]
        ]
      })
    });
    const content = await rawResponse.json();

    console.log(content);
  })();

  return (
    <div
      className="flex flex-col min-h-screen items-center gap-5 my-6"
    >
      <h1
        className="text-4xl font-semibold text-center mb-3"
      >
        Icebreaker Bingo
      </h1>
      <BingoForm />
    </div>
  )
}

export default App
