json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
  json.item_ids @pokemon.items.map {|item| item.id }
end


json.items @pokemon.items do |item|
  json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
end
