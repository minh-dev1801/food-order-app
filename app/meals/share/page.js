import ImagePicker from '@/components/images/image-picker';
import classes from './page.module.css';

export default function ShareMealPage() {
  return (
    <>
      <header className="mx-auto mb-20 mt-12 w-[90%] max-w-[75rem] text-2xl text-[#ddd6cb]">
        <h1 className="text-montserrat mb-4 text-4xl font-bold">
          Share your <span className="text-header-gradient">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 w-[90%] max-w-[75rem] text-white">
        <form className={classes.form}>
          <div className="flex gap-4">
            <p className="mb-4 flex-1">
              <label className={classes.label} htmlFor="name">
                Your name
              </label>
              <input className={classes.input} type="text" id="name" name="name" required />
            </p>
            <p className="mb-4 flex-1">
              <label className={classes.label} htmlFor="email">
                Your email
              </label>
              <input className={classes.input} type="email" id="email" name="email" required />
            </p>
          </div>
          <p className="mb-4">
            <label className={classes.label} htmlFor="title">
              Title
            </label>
            <input className={classes.input} type="text" id="title" name="title" required />
          </p>
          <p className="mb-4">
            <label className={classes.label} htmlFor="summary">
              Short Summary
            </label>
            <input className={classes.input} type="text" id="summary" name="summary" required />
          </p>
          <p className="mb-4">
            <label className={classes.label} htmlFor="instructions">
              Instructions
            </label>
            <textarea
              className={classes.textarea}
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className="text-right">
            <button className="button-meal-share hover:header-gradient-orange-hover" type="submit">
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
