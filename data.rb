require 'json'
require 'pry'

topics = {}
keys = []
Dir.new("badges").each do |file|
  if file.to_s[0] != '.' and !file.include?('-completed') then
    name = file.to_s.sub('-60x60.png','').sub('-completed','')
    dname = name.downcase
    keys << dname
    topics[dname] = {}
    topics[dname][:badge] = name + '-60x60.png'
    topics[dname][:badge_completed] = name + '-completed-60x60.png'
    topics[dname][:exercises] = []
  end
end

Dir.new("exercises2").each do |file|
  if file.to_s[0] != '.'
    exercise = file.to_s.sub('-full-resized.png','')
    topic = exercise.split('-')[0].gsub('_', '-').downcase
    topics[topic][:exercises] << file.to_s
  end
end

p topics.to_json

File.open("data.js","w") do |f|
  f.write(JSON.pretty_generate(topics))
end

File.open("topics.js","w") do |f|
  f.write(JSON.pretty_generate(keys))
end
