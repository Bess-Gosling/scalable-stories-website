// ✅ Named export — RECOMMENDED
export async function submitEmailToBeehiiv(email: string, firstName: string) {
  const res = await fetch('https://api.beehiiv.com/v2/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEEHIIV_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      first_name: firstName,
      publication_id: import.meta.env.VITE_BEEHIIV_PUBLICATION_ID,
      reactivate_existing: true,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    return { success: false, message: `Beehiiv error: ${error}` };
  }

  return { success: true };
}
