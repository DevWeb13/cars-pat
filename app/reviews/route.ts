export async function GET(request: Request) {
  const placeId = 'ChIJ1Qkd9IS4yRIRwxROw9Mle5Y'; // Votre Place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Votre clé API

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=review,rating,user_ratings_total&key=${apiKey}&language=fr`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      console.log(data.result);
      const reviews = data.result.reviews;
      const averageRating = data.result.rating;
      const totalReviews = data.result.user_ratings_total;

      return new Response(
        JSON.stringify({ reviews, averageRating, totalReviews }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: `Erreur lors de la récupération des avis: ${data.status}`,
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Erreur lors de la requête à l'API: ${error.message}`,
      }),
      { status: 500 }
    );
  }
}
