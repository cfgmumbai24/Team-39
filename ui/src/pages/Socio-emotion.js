import React from 'react';
import Navbar from './Navbar';
const SocialEmotionalform = () => {
  return (
    <div>
        <Navbar/>
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className='text-4xl font-bold py-2 px-4 text-center mb-4'>Social Emotional</h1>
          <p>How does the student typically react when faced with a difficult task?</p>
          <input type="radio" name="react" id="react1" />
          <label htmlFor="react1" className="ml-2">Tries their best to complete it</label><br />
          <input type="radio" name="react" id="react2" />
          <label htmlFor="react2" className="ml-2">Asks for help from the teacher or peers</label><br />
          <input type="radio" name="react" id="react3" />
          <label htmlFor="react3" className="ml-2">Gets upset or frustrated</label><br />
          <input type="radio" name="react" id="react4" />
          <label htmlFor="react4" className="ml-2">Gives up easily</label><br />
        </div>

        <div className="mb-4">
          <p>How does the student interact with classmates during group activities?</p>
          <input type="radio" name="interact" id="interact1" />
          <label htmlFor="interact1" className="ml-2">Participates actively and cooperatively</label><br />
          <input type="radio" name="interact" id="interact2" />
          <label htmlFor="interact2" className="ml-2">Prefers to work alone</label><br />
          <input type="radio" name="interact" id="interact3" />
          <label htmlFor="interact3" className="ml-2">Gets along well with some classmates</label><br />
          <input type="radio" name="interact" id="interact4" />
          <label htmlFor="interact4" className="ml-2">Often argues or disagrees with others</label><br />
        </div>

        <div className="mb-4">
          <p>How would you describe the student's energy level throughout the school day?</p>
          <input type="radio" name="energy" id="energy1" />
          <label htmlFor="energy1" className="ml-2">Energetic and enthusiastic</label><br />
          <input type="radio" name="energy" id="energy2" />
          <label htmlFor="energy2" className="ml-2">Mostly energetic, with occasional tired moments</label><br />
          <input type="radio" name="energy" id="energy3" />
          <label htmlFor="energy3" className="ml-2">Quiet and reserved</label><br />
          <input type="radio" name="energy" id="energy4" />
          <label htmlFor="energy4" className="ml-2">Tired or low-energy</label><br />
        </div>

        <div className="mb-4">
          <p>How does the student usually express their feelings (e.g., sadness, excitement)?</p>
          <input type="radio" name="feelings" id="feelings1" />
          <label htmlFor="feelings1" className="ml-2">Talks about their feelings openly</label><br />
          <input type="radio" name="feelings" id="feelings2" />
          <label htmlFor="feelings2" className="ml-2">Keeps their feelings to themselves</label><br />
          <input type="radio" name="feelings" id="feelings3" />
          <label htmlFor="feelings3" className="ml-2">Shows emotions through behavior (e.g., smiling, crying)</label><br />
          <input type="radio" name="feelings" id="feelings4" />
          <label htmlFor="feelings4" className="ml-2">Others notice changes in their behavior</label><br />
        </div>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SocialEmotionalform