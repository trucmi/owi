<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Session;
use Redirect;
use Newsletter;

class MainController extends Controller
{
  // The user GET /index.php/subscribe-waiting-list
  public function getSubscribeWaitingList() { return redirect('/#mail'); }

  // The user POST /index.php/subscribe-waiting-list
  // Case : the user wants to get news from the site
	public function postSubscribeWaitingList(Request $request)
  {
    // Check if the input $request->email is conform to the email norm
    $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);
    // If the email is invalid
    if ($validator->fails())
      return Redirect::to('/#mail')->withErrors('L\'adresse email n\'est pas valide.')->withInput();
    else
    {
      if(Newsletter::isSubscribed(strtolower($request->email)))
      return Redirect::to('/#mail')->withErrors('L\'adresse email est déjà utilisée.')->withInput();

      else
      Newsletter::subscribe(strtolower($request->email));

      // Look if the email exists in the newsletter table from database owi
      //$user = DB::table('newsletter')->where('newsletter_email', strtolower($request->email))->first();
      // If there's no occurences
      //if (empty($user))
      //{
        // Add the email and the time to newsletter table from database owi
        //$date = (new \DateTime())->format('Y-m-d H:i:s');
        //DB::table('newsletter')->insert(['newsletter_email' => strtolower($request->email), 'newsletter_subscription_date' => $date]);
        // Generate a flash data variable named message with the message in 2nd parameter

        // Example to get data from the view page :
        // @if(Session::has('message'))
        //  <div>{{ Session::get('message') }}</div>
        // @endif

        // Read from : https://laravel.com/docs/5.5/session
        // Flash Data
        // Sometimes you may wish to store items in the session only for the next request. You
        // may do so using the flash method. Data stored in the session using this method will
        // only be available during the subsequent HTTP request, and then will be deleted. Flash
        // data is primarily useful for short-lived status messages:
        Session::flash('message', 'Votre mail nous est bien parvenu !!');
        return Redirect::to('/#mail');
      }
    }
}