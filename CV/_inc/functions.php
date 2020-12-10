<?php

$base_url = 'http://localhost/Projekty/zopakovanie/PURE_JS/CV/contact.php';

/**
 * REDIRECT
 */
function redirect() {
    global $base_url;
    header("Location: $base_url");
        die();
}

	/**
	 * Is Even
	 *
	 * Returns TRUE if $number is even
	 * FALSE if odd
	 *
	 * @param  integer  $number number in question
	 * @return boolean          true if even
	 */
	function is_even( $number )
	{
		return $number % 2 == 0;
	}


	/**
	 * Get Parity
	 *
	 * Returns string "even" for even numbers
	 * And, surprise, "odd" for odd numbers
	 *
	 * @param  integer $number number in question
	 * @return string          "even" if true, "odd" if false
	 */
	function get_parity( $number )
	{
		return is_even($number) ? 'even' : 'odd';
	}


	/**
	 * Can Edit
	 *
	 * A poor man's login situation
	 * When you can't be bothered implementing real login
	 * And when the stakes are _really_ low
	 *
	 * @return bool
	 */
	function can_edit()
	{
		if(!strpos($_SERVER['REQUEST_URI'], 'reviews.php')) return false;

		$what = isset($_GET['what']) ? $_GET['what'] : false;
		$add = isset($_GET['add']) ? $_GET['add'] : false;

		return $what ==='WantYouRemoved' && $add == 1;

		// http://localhost/Projekty/zopakovanie/PURE_JS/CV/reviews.php?what=WantYouRemoved&add=1
	}


	/**
	 * Make File
	 *
	 * Create new file
	 *
	 * @param  string  $filename
	 * @return boolean
	 */
	function mk_file( $filename )
	{
		// if files doesn't exist, create the file and close it
		if ( ! is_file( $filename ) )
		{
			fclose( fopen($filename, 'x') );
			return true;
		}

		// file already exists
		return false;
	}

	function plain($str) {
		//nahradi specialne programatorske znaky aby mi nerobili bordel na stranke
		return htmlspecialchars($str, ENT_QUOTES );
	}

	/**
	 * Plain
	 *
	 * Escape (though not from New York)
	 *
	 * @param  string $str
	 * @return string
	 */

    function getDataFromFile($file){

        // grab data from $file
        $data = file_get_contents($file);
        $data = json_decode($data) ?: [];
        return $data;
    }