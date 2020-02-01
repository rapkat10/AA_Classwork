require 'active_support'
require 'active_support/inflector'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response #== @res
  end

  # Set the response status code and header
  def redirect_to(url)
    if !@already_built_response
      res.location = url
      res.status = 302
      @already_built_response = true
    else
      raise "double render error" 
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    if !@already_built_response
      res['Content-Type'] = content_type
      res.write(content)
      @already_built_response = true
    else
      raise "double render error" 
    end

  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    if !@already_built_response
      @already_built_response = true
      controller_name = self.class.name.underscore
      file_path = "..views/#{controller_name}/#{template_name}.html.erb"
       p file_path
      content = File.read(File.dirname(__FILE__)file_path)
      render_content(ERB.new("<%= content %>").result(binding), 'text/html')
    else
      raise "double render error" 
    end
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end

