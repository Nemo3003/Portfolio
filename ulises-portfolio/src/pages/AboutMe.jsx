import "../styles/index.css"

export default function AboutMe() {
    return(
        <div class="p-10 mr-4 grid place-items-center">  

        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
          <div class="px-6 py-4">
            <h1 class="font-bold text-xl mb-2">About me!</h1>
            <p class="text-gray-700 text-base">
              I have always been fueled by the exciting thought of being challenged! I love to work with a team and always strive to collaborate as much as possible.
              My hobbies include: videogames, history, hiking, and programming.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#videogames</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#history</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">#hiking</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  mb-2">#programming</span>
          </div>
        </div>
      </div>
    )
}