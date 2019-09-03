require 'test_helper'

class PokemoncontrollerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get pokemoncontroller_create_url
    assert_response :success
  end

  test "should get index" do
    get pokemoncontroller_index_url
    assert_response :success
  end

  test "should get show" do
    get pokemoncontroller_show_url
    assert_response :success
  end

end
