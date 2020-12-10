<?php include_once "partials/header.php" ?>

    <div class="page-header">
        <h1>Reviews</h1>
    </div>
    <?php

// create "storage" if no exists
$file = '_inc/storage';
mk_file( $file );

// grab data from it
$data = file_get_contents( $file );
$data = json_decode( $data ) ?: [];

// add new thing, if form was submitted
if ( ! empty($_POST) )
{
    $date = time();

    foreach( $_POST['message'] as $message )
    {
        if ( ! $message ) continue;

        array_push( $data, (object) [
            'text' => $message,
            'date' => $date
        ]);
    }

    file_put_contents( $file, json_encode( $data ) );
}

?>
    	<section class="article-list">
		<?php foreach ( $data as $i => $item ) : $row = ++$i; ?>

			<article class="group <?= get_parity( $row ) ?>">
				<time datetime="<?= date( 'Y-m-d', $item->date ) ?>">
					<?= date( 'j M Y', $item->date ) ?>
                </time>
    
                    <p>
                        <?= nl2br( plain($item->text) ) ?>
                    </p>

		<!-- Create Delete -->
                <?php if (can_edit()) : ?>
				    <a href="_inc/delete-me.php?id=<?php echo $i ?>">Delete</a> 
                <?php endif ?>
                
            </article>


		<?php endforeach ?>
	</section>

    <form id="add-form" class="col-sm-6" action="" method="post">
        <p class="form-group">
        <svg class="svg" height="120" width="120">
            <circle class="underlay" cx="50%" cy="50%" r="26"></circle>
            <circle class="progress" cx="50%" cy="50%" r="26" stroke="currentColor"></circle>
        </svg>
            <textarea class="svgAnim" name="message[]" autofocus
                      id="text" rows="3" placeholder="Review" maxlength = '700'></textarea>
            <span class="counter"></span>
        </p>
            <input class="btn btn-danger" type="submit" value="Submit">

		    
    </form>

<?php include_once "partials/footer.php" ?>