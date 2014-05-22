require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame eg. "username/repository"
GITHUB_REPONAME = "nooku/www.nooku.org"

# Change the branch name eg. "gh-pages"
GITHUB_BRANCH = "gh-pages"

namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "url" => "http://nooku.github.io/www.nooku.org"
    })).process
  end


  desc "Generate and publish"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp
      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site update"
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/#{GITHUB_BRANCH} --force"
    end
  end
end
